import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/site-logo.svg';

function Login({ loginUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    loginUser(email, password);
  }
  return (
    <main className='login'>
      <section className='login__section'>
        <Link to='/' className='login__link login__link_type_logo link'>
          <img className='login__logo' src={logo} alt='логотип сайта' />
        </Link>
        <h1 className='login__title'>Рады видеть!</h1>
      </section>
      <form className='login__form' onSubmit={handleSubmit}>
        <ul className='login__content'>
          <li className='login__input-container'>
            <label className='login__input-label' htmlFor='email__input'>
              E-mail
            </label>
            <div className='login__input-area'>
              <input
                value={email}
                onChange={handleEmailChange}
                className='login__input input'
                type='email'
                id='email__input'
                placeholder='Электронная почта'
              />
            </div>
          </li>
          <li className='login__input-container'>
            <label className='login__input-label' htmlFor='password__input'>
              Пароль
            </label>
            <div className='login__input-area'>
              <input
                value={password}
                onChange={handlePasswordChange}
                className='login__input input'
                type='text'
                minLength='8'
                maxLength='30'
                id='password__input'
                placeholder='Пароль'
              />
            </div>
            <span className='login__error-message'>Что-то пошло не так...</span>
          </li>
        </ul>
        <button className='login__button button' type='submit'>
          Войти
        </button>
      </form>
      <div className='login__link-container'>
        <span className='login__link-label'>Ещё не зарегистрированы?</span>
        <Link to='/signup' className='login__link link'>
          Регистрация
        </Link>
      </div>
    </main>
  );
}
export default Login;
