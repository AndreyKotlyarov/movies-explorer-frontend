import './Header.css';
import logo from '../../images/site-logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../Navigation/Navigaton';
import { useState } from 'react';

function Header({ isLoggedIn }) {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  function handleMobileMenuClick() {
    setIsMobileMenuOpen(true);
  }
  function handleMobileMenuClose() {
    setIsMobileMenuOpen(false);
  }
  return isLoggedIn ? (
    <header className='header'>
      <Link to='/' className='header__link header__link_type_logo link'>
        <img className='header__logo' src={logo} alt='логотип сайта' />
      </Link>
      <Navigation isOpen={isMobileMenuOpen} onClose={handleMobileMenuClose} />
      <button type='button' onClick={handleMobileMenuClick} className='header__mobile-menu-button' />
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
