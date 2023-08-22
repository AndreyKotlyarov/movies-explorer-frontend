import './Header.css';
import logo from '../../images/site-logo.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigaton';
import { useState } from 'react';

function Header() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  function handleMobileMenuClick() {
    setIsMobileMenuOpen(true);
  }
  function handleMobileMenuClose() {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'visible';
  }

  return isLoggedIn ? (
    <header className={location.pathname === '/' ? 'header header_type_landing' : 'header'}>
      <Link to='/' className='header__link header__link_type_logo link'>
        <img className='header__logo' src={logo} alt='логотип сайта' />
      </Link>
      <Navigation isOpen={isMobileMenuOpen} onClose={handleMobileMenuClose} />
      <button
        type='button'
        onClick={handleMobileMenuClick}
        className={
          location.pathname === '/'
            ? 'header__mobile-menu-button header__mobile-menu-button_type_landing button'
            : 'header__mobile-menu-button button'
        }
      />
    </header>
  ) : (
    <header className='header header_type_landing'>
      <img className='header__logo' src={logo} alt='логотип сайта' />
      <div className='header__container'>
        <Link to='/signup' className='header__link link'>
          Регистрация
        </Link>
        <button type='button' onClick={() => navigate('/signin')} className='header__login-button button'>
          Войти
        </button>
      </div>
    </header>
  );
}

export default Header;
