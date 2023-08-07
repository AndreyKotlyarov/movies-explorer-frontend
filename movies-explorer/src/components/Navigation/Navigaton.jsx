import './Navigation.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
function Navigation({ isOpen, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
  }, [isOpen]);
  return (
    <nav className={`navigation ${isOpen ? 'navigation_type_mobile' : ''} ${location.pathname === '/' ? 'navigation_type_landing' : ''}`}>
      <div className='navigation__mobile-container'>
        <ul className='navigation__links-container'>
          <li className='navigation__link-container navigation__link-container_type_hidden'>
            <Link to='/' className='navigation__navlink navigation__navlink_type_hidden link'>
              Главная
            </Link>
          </li>
          <li className='navigation__link-container'>
            <Link to='/movies' className='navigation__navlink navigation__navlink_active link'>
              Фильмы
            </Link>
          </li>
          <li className='navigation__link-container'>
            <Link to='/saved-movies' className='navigation__navlink link'>
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <button type='button' onClick={() => navigate('/profile')} className='navigation__profile-button button'>
          <span className='navigation__button-text'>Аккаунт</span>
        </button>
        <button type='button' onClick={onClose} className='navigation__close-button button' />
      </div>
    </nav>
  );
}
export default Navigation;
