import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import MainPage from './components/MainPage/MainPage';
import Navbar from './components/Navbar/Navbar';
import Registration from './components/Registration/Registration';

function App({ userSession }) {
  const [authState, setAuthState] = useState(userSession || null);

  return (
    <div className="App">
      <div>
        <p>
          Привет,
          {' '}
          {authState ? `${authState.email}` : 'гость'}
        </p>
      </div>
      <Navbar authState={authState} setAuthState={setAuthState} />
      <Routes>
        <Route path="/" element={<MainPage authState={authState} />} />
        <Route path="/registration" element={<Registration setAuthState={setAuthState} />} />
        <Route path="/login" element={<Login setAuthState={setAuthState} />} />
      </Routes>
    </div>
  );
}

export default App;
