require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const bcrypt = require('bcrypt');
const {
  Users, Posts, Sequelize,
} = require('./db/models');

const app = express();

app.use(cors({
  credentials: true,
  origin: true,
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(process.env.PWD, 'public')));

const sessionConfig = {
  name: 'mega-cookie',
  secret: process.env.SECRET || 'thisisnotsecure',
  store: new FileStore(),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  },
  resave: true,
  saveUninitialized: false,
};

app.use(session(sessionConfig));

app.get('/auth', async (req, res) => {
  try {
    const result = await Users.findByPk(req.session.userId);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

app.post('/auth', async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    console.log({ userName, email, password });

    const user = await Users.findOne({
      where: {
        [Sequelize.Op.or]: [{ name: userName }, { email }],
      },
    });

    if (user && (await bcrypt.compare(password, user.password) || password === user.password)) {
      req.session.userName = user.name;
      req.session.userId = user.id;
      return res.json(user);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Users.create(
      { email, password: hashedPassword, name: userName },
    );

    if (newUser.id) {
      req.session.userName = newUser.name;
      req.session.userId = newUser.id;
      return res.json(newUser);
    }

    return res.json({});
  } catch (error) {
    return res.json(error);
  }
});

app.get('/logout', async (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('mega-cookie');
    res.sendStatus(200);
  } catch (error) {
    res.json(error);
  }
});

app.post('/registration', async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const result = await Users.create({ email, password: await bcrypt.hash(password), name });
    if (result.id) {
      req.session.userName = result.name;
      req.session.userId = result.id;
      return res.json(result);
    }
    throw Error(result);
  } catch (error) {
    return res.json(error);
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await Users.findOne({ where: { email } });
    if (await bcrypt.compare(password, result.password)) {
      req.session.userName = result.name;
      req.session.userId = result.id;
      return res.json(result);
    }
    throw Error(result);
  } catch (error) {
    return res.json(error);
  }
});

app.get('/users', async (req, res) => {
  const users = await Users.findAll();
  res.json(users);
});

app.listen(process.env.PORT, () => {
  console.log('server start ', process.env.PORT);
});
