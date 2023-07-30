import './Login.css';
import logo from '../../images/site-logo.svg';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <form className='login__form'>
      <img className='login__logo' src={logo} alt='логотип сайта' />
      <h1 className='login__title'>Рады видеть!</h1>
      <ul className='login__content'>
        <li className='login__input-container'>
          <label className='login__input-label' htmlFor='email__input'>
            E-mail
          </label>
          <div className='login__input-area'>
            <input className='login__input' type='t ext' id='email__input' placeholder='pochta@yandex.ru' />
          </div>
        </li>
        <li className='login__input-container'>
          <label className='login__input-label' htmlFor='password__input'>
            Пароль
          </label>
          <div className='login__input-area'>
            <input className='login__input' type='text' id='password__input' placeholder='Пароль' />
          </div>
          <span className='login__error-message'>Что-то пошло не так...</span>
        </li>
      </ul>
      <button className='login__button button' type='submit'>
        Войти
      </button>
      <div className='login__link-container'>
        <span className='login__link-label'>Ещё не зарегистрированы?</span>
        <Link to='/signup' className='login__link link'>
          Регистрация
        </Link>
      </div>
    </form>
  );
}
export default Login;
