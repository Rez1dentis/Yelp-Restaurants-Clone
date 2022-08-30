const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Restoraunt }) {
      this.hasMany(Restoraunt, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
