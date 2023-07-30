import './Navigation.css';
import { Link, useNavigate } from 'react-router-dom';
function Navigation({ isOpen, onClose }) {
  const navigate = useNavigate();
  return (
    <nav className={`navigation ${isOpen ? 'navigation_type_mobile' : ''}`}>
      <div className='navigation__links-container'>
        <Link to='/' className='navigation__navlink navigation__navlink_type_hidden link'>
          Главная
        </Link>
        <Link to='/movies' className='navigation__navlink navigation__navlink_active link'>
          Фильмы
        </Link>
        <Link to='/saved-movies' className='navigation__navlink link'>
          Сохранённые фильмы
        </Link>
      </div>
      <button onClick={() => navigate('/profile')} className='navigation__profile-button button'>
        <p className='navigation__button-text'>Аккаунт</p>
      </button>
      <button onClick={onClose} className='navigation__close-button button' />
    </nav>
  );
}
export default Navigation;
