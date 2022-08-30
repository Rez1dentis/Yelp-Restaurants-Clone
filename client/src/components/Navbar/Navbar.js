import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar({ authState, setAuthState }) {
  const navigate = useNavigate();
  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/logout');
    if (response.ok) {
      setAuthState(null);
      navigate('/');
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">Главная</NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {!authState
                ? (

                  <>
                    <li className="nav-item">
                      <NavLink to="/registration" className="nav-link active" aria-current="page">Регистрация</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/login" className="nav-link">Авторизация</NavLink>
                    </li>
                  </>

                ) : (
                  <>
                    <li className="nav-item">
                      <NavLink to="/" className="nav-link active" aria-current="page">Yelp</NavLink>
                    </li>
                    <li className="nav-item">
                      <a onClick={logoutHandler} className="nav-link" href="">Выход</a>
                    </li>
                  </>
                )}
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Navbar;
