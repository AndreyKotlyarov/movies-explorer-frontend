import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
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
