import { Link } from 'react-router-dom';
import './Footer.css';
function Footer() {
  return (
    <footer className='footer__container'>
      <div className='footer__header-cotainer'>
        <h3 className='footer__header'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      </div>
      <ul className='footer__links'>
        <li className='footer__item'>
          <Link className='footer__link'>Яндекс.Практикум</Link>
        </li>
        <li className='footer__item'>
          <Link className='footer__link'>Github</Link>
        </li>
      </ul>
      <p className='footer__copyright'>&copy;2020</p>
    </footer>
  );
}
export default Footer;
