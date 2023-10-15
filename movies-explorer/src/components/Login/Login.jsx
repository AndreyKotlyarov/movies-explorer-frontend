import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import './Login.css';
import logo from '../../images/site-logo.svg';

function Login({ loginUser }) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  function handleSubmit(e) {
    e.preventDefault();
    loginUser(values.email, values.password);
  }
  return (
    <main className='login'>
      <section className='login__section'>
        <Link to='/' className='login__link login__link_type_logo link'>
          <img className='login__logo' src={logo} alt='логотип сайта' />
        </Link>
        <h1 className='login__title'>Рады видеть!</h1>
      </section>
      <form className='login__form' onSubmit={handleSubmit} noValidate>
        <ul className='login__content'>
          <li className='login__input-container'>
            <label className='login__input-label' htmlFor='email__input'>
              E-mail
            </label>
            <div className='login__input-area'>
              <input
                name='email'
                value={values.email || ''}
                onChange={handleChange}
                className='login__input input'
                type='email'
                id='email__input'
                placeholder='Электронная почта'
                pattern='^[a-z1-9]+@+[a-z1-9]+[.]+[a-z]+$'
                required
              />
            </div>
            <span className='login__error-message login__error-message_active'>{errors.email || ''}</span>
          </li>
          <li className='login__input-container'>
            <label className='login__input-label' htmlFor='password__input'>
              Пароль
            </label>
            <div className='login__input-area'>
              <input
                name='password'
                value={values.password || ''}
                onChange={handleChange}
                className='login__input input'
                type='password'
                minLength='8'
                maxLength='30'
                id='password__input'
                placeholder='Пароль'
                required
              />
            </div>
            <span className='login__error-message login__error-message_active'>{errors.password || ''}</span>
          </li>
        </ul>
        <button className={`login__button button ${isValid ? '' : 'button_type_disabled'}`} type='submit' disabled={!isValid}>
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
