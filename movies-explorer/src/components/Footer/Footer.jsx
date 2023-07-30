import './Footer.css';
import { Link } from 'react-router-dom';

function Footer({ isLoggedIn }) {
  return isLoggedIn ? (
    <footer className='footer__container footer__container_type_profile'>
      <div className='footer__content'>
        <ul className='footer__links footer__links_type_profile'>
          <li className='footer__item footer__item_type_profile'>
            <Link className='footer__link link'>Редактировать</Link>
          </li>
          <li className='footer__item footer__item_type_profile'>
            <Link className='footer__link footer__link_type_exit-profile link'>Выйти из аккаунта</Link>
          </li>
        </ul>
      </div>
    </footer>
  ) : (
    <footer className='footer__container'>
      <div className='footer__title-container'>
        <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      </div>
      <div className='footer__content'>
        <ul className='footer__links'>
          <li className='footer__item'>
            <Link to='https://practicum.yandex.ru/' target='_blank' className='footer__link link'>
              Яндекс.Практикум
            </Link>
          </li>
          <li className='footer__item'>
            <Link to='https://github.com/AndreyKotlyarov' target='_blank' className='footer__link link'>
              Github
            </Link>
          </li>
        </ul>
        <p className='footer__copyright'>&copy;2023</p>
      </div>
    </footer>
  );
}
export default Footer;
