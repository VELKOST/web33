import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {

    if (username === 'admin' && password === 'password') {
      dispatch(login(username));
      setUsername('');
      setPassword('');
      alert('Ес, успешно!');
    } else {
      alert('Неправильные имя пользователя или пароль!');
    }
  };

  return (
    <div>
      <h2>Страница авторизации</h2>
      <form>
        <input
          type="text"
          value={username}
          placeholder="Имя пользователя"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          value={password}
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleLogin}>
          Войти
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
