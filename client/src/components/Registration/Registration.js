import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registration({ setAuthState }) {
  const [inputs, setInputs] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/auth/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    if (response.ok) {
      const data = await response.json();
      setAuthState(data);
      navigate('/');
    }
  };

  return (
    <div>
      <h1>Регистрация</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input name="email" onChange={changeHandler} value={inputs.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Имя</label>
          <input name="name" onChange={changeHandler} value={inputs.name} type="name" className="form-control" id="exampleInputName" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
          <input name="password" onChange={changeHandler} value={inputs.password} type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default Registration;
