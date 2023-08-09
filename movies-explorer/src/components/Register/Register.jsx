import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import './Register.css';
import logo from '../../images/site-logo.svg';
function Register({ registerUser }) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  function handleSubmit(e) {
    e.preventDefault();
    registerUser(values.email, values.password, values.name);
  }
  return (
    <main className='register'>
      <section className='register__section'>
        <Link to='/' className='register__link register__link_type_logo link'>
          <img className='register__logo' src={logo} alt='логотип сайта' />
        </Link>
        <h1 className='register__title'>Добро пожаловать!</h1>
      </section>
      <form className='register__form' onSubmit={handleSubmit}>
        <ul className='register__content'>
          <li className='register__input-container'>
            <label className='register__input-label' htmlFor='name__input'>
              Имя
            </label>
            <div className='register__input-area'>
              <input
                value={values.name || ''}
                onChange={handleChange}
                name='name'
                className='register__input input'
                type='text'
                minLength='2'
                maxLength='30'
                id='name__input'
                placeholder='Ваше имя'
              />
            </div>
          </li>
          <li className='register__input-container'>
            <label className='register__input-label' htmlFor='email__input'>
              E-mail
            </label>
            <div className='register__input-area'>
              <input
                value={values.email || ''}
                onChange={handleChange}
                name='email'
                className='register__input input'
                type='email'
                id='email__input'
                placeholder='Ваша электронная почта'
              />
            </div>
          </li>
          <li className='register__input-container'>
            <label className='register__input-label' htmlFor='password__input'>
              Пароль
            </label>
            <div className='register__input-area'>
              <input
                value={values.password || ''}
                onChange={handleChange}
                name='password'
                className='register__input input'
                type='text'
                minLength='8'
                maxLength='30'
                id='password__input'
                placeholder='Пароль'
              />
            </div>
            <span className='register__error-message register__error-message_active'>{errors.name || errors.email || errors.password}</span>
          </li>
        </ul>
        <button className={`register__button button ${isValid ? '' : 'button_type_disabled'}`} type='submit' disabled={!isValid}>
          Зарегистрироваться
        </button>
      </form>
      <div className='register__link-container'>
        <span className='register__link-label'>Уже зарегистрированы?</span>
        <Link to='/signin' className='register__link link'>
          Войти
        </Link>
      </div>
    </main>
  );
}
export default Register;
