import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [userNameValue, setUserNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [uncorrectValues, setUncorrectValues] = useState('');

  const isLogin = localStorage.getItem('isLogin');

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin === 'true') {
      navigate('/');
    }
  }, [isLogin]);

  function checkData(event, userName, password) {
    event.preventDefault();

    const defaultUserName = 'Admin';
    const defaultPassword = '12345678';

    if (userName === defaultUserName && password === defaultPassword) {
      localStorage.setItem('isLogin', 'true');
      localStorage.setItem('userName', JSON.stringify(userNameValue));
      navigate('/');
    } else {
      setUncorrectValues('Имя пользователя или пароль введены неверно');
    }
  }

  return (
    <>
      <form className="login" onSubmit={(event) => checkData(event, userNameValue, passwordValue)}>
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
      <p className={uncorrectValues === '' ? 'unactive' : 'uncorrect-values'}>{uncorrectValues}</p>
    </>
  );
}

export default Login;
