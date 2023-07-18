import './Header.css';
import logo from '../../images/site-logo.svg';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='логотип сайта' />
      <div className='header__container'>
        <Link className='header__link'>Регистрация</Link>
        <button className='header__button'>Войти</button>
      </div>
    </header>
  );
}

export default Header;
