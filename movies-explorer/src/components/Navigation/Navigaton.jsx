import './Navigation.css';
import { Link, useNavigate } from 'react-router-dom';
function Navigation({ isOpen, onClose }) {
  const navigate = useNavigate();
  return (
    <nav className={`navigation ${isOpen ? 'navigation_type_mobile' : ''}`}>
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
          <p className='navigation__button-text'>Аккаунт</p>
        </button>
        <button type='button' onClick={onClose} className='navigation__close-button button' />
      </div>
    </nav>
  );
}
export default Navigation;
