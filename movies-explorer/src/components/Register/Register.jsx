import './Register.css';
import logo from '../../images/site-logo.svg';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <form className='register__form'>
      <img className='register__logo' src={logo} alt='логотип сайта' />
      <h1 className='register__title'>Добро пожаловать!</h1>
      <ul className='register__content'>
        <li className='register__input-container'>
          <label className='register__input-label' htmlFor='name__input'>
            Имя
          </label>
          <div className='register__input-area'>
            <input className='register__input' type='text' id='name__input' placeholder='Виталий' />
          </div>
        </li>
        <li className='register__input-container'>
          <label className='register__input-label' htmlFor='email__input'>
            E-mail
          </label>
          <div className='register__input-area'>
            <input className='register__input' type='t ext' id='email__input' placeholder='pochta@yandex.ru' />
          </div>
        </li>
        <li className='register__input-container'>
          <label className='register__input-label' htmlFor='password__input'>
            Пароль
          </label>
          <div className='register__input-area'>
            <input className='register__input' type='text' id='password__input' placeholder='Пароль' />
          </div>
          <span className='register__error-message register__error-message_active'>Что-то пошло не так...</span>
        </li>
      </ul>
      <button className='register__button button' type='submit'>
        Зарегистрироваться
      </button>
      <div className='register__link-container'>
        <span className='register__link-label'>Уже зарегистрированы?</span>
        <Link to='/signin' className='register__link link'>
          Войти
        </Link>
      </div>
    </form>
  );
}
export default Register;
