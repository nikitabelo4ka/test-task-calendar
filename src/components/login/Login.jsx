import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { DEFAULT_USERNAME, DEFAULT_PASSWORD } from 'Constants/loginData.js';
import './login.css';

function Login() {
  const [userNameValue, setUserNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isValuesUncorrect, setIsValuesUncorrect] = useState(false);

  const [isHeaderButtonActive, setIsHeaderButtonActive] = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isHeaderButtonActive) {
      navigate('/');
    }
  }, []);

  function checkData(event) {
    event.preventDefault();

    if (userNameValue === DEFAULT_USERNAME && passwordValue === DEFAULT_PASSWORD) {
      localStorage.setItem('isLogin', 'true');
      localStorage.setItem('userName', JSON.stringify(userNameValue));
      setIsHeaderButtonActive(true);
      navigate('/profile');
    } else {
      setIsValuesUncorrect(true);
    }
  }

  return (
    <div className="container">
      <form className="login" onSubmit={(event) => checkData(event)}>
        <input
          value={userNameValue}
          onChange={(event) => setUserNameValue(event.target.value)}
          className="login-input"
          type="text"
          placeholder="User name"
          required
          autoComplete="on"
        />
        <input
          value={passwordValue}
          onChange={(event) => setPasswordValue(event.target.value)}
          className="login-input"
          type="password"
          placeholder="Password"
          required
        />
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
      <p className={isValuesUncorrect ? 'uncorrect-values' : 'unactive-text'}>
        Имя пользователя или пароль введены неверно
      </p>
    </div>
  );
}

export default Login;
