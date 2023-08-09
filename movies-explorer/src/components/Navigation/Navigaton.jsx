import './Navigation.css';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
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
            <NavLink
              to='/'
              onClick={onClose}
              className={({ isActive }) =>
                isActive
                  ? 'navigation__navlink navigation__navlink_type_hidden navigation__navlink_active link'
                  : 'navigation__navlink navigation__navlink_type_hidden link'
              }
            >
              Главная
            </NavLink>
          </li>
          <li className='navigation__link-container'>
            <NavLink
              to='/movies'
              onClick={onClose}
              className={({ isActive }) => (isActive ? 'navigation__navlink navigation__navlink_active link' : 'navigation__navlink link')}
            >
              Фильмы
            </NavLink>
          </li>
          <li className='navigation__link-container'>
            <NavLink
              to='/saved-movies'
              onClick={onClose}
              className={({ isActive }) => (isActive ? 'navigation__navlink navigation__navlink_active link' : 'navigation__navlink link')}
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <button
          type='button'
          onClick={() => {
            navigate('/profile');
            onClose();
          }}
          className='navigation__profile-button button'
        >
          <span className='navigation__button-text'>Аккаунт</span>
        </button>
        <button type='button' onClick={onClose} className='navigation__close-button button' />
      </div>
    </nav>
  );
}
export default Navigation;
