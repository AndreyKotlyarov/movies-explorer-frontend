import './Header.css';
import logo from '../../images/site-logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
function Header() {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='логотип сайта' />
      <Routes>
        <Route
          path='/'
          element={
            <div className='header__container'>
              <Link className='header__link'>Регистрация</Link>
              <button className='header__login-button'>Войти</button>
            </div>
          }
        />
        <Route
          path='/movies'
          element={
            <>
              <nav className='header__navigation'>
                <div className='header__container'>
                  <Link className='header__navlink header__navlink_active'>Фильмы</Link>
                  <Link className='header__navlink'>Сохранённые фильмы</Link>
                </div>
                <button className='header__profile-button'>
                  <p className='header__button-text'>Аккаунт</p>
                </button>
              </nav>
              <button className='header__mobile-menu-button' />
            </>
          }
        />
        <Route
          path='/saved-movies'
          element={
            <>
              <div className='header__container'>
                <Link className='header__navlink'>Фильмы</Link>
                <Link className='header__navlink header__navlink_active'>Сохранённые фильмы</Link>
              </div>
              <button className='header__profile-button'>
                <p className='header__button-text'>Аккаунт</p>
              </button>
            </>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;
