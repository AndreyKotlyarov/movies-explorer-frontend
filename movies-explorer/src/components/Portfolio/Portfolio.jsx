import './Portfolio.css';
import { Link } from 'react-router-dom';
function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li className='portfolio__link-container'>
          <Link className='portfolio__link'>Статичный сайт</Link>
          <p className='portfolio__link-icon'>↗</p>
        </li>
        <li className='portfolio__link-container'>
          <Link className='portfolio__link'>Адаптивный сайт</Link>
          <p className='portfolio__link-icon'>↗</p>
        </li>
        <li className='portfolio__link-container'>
          <Link className='portfolio__link'>Одностраничное приложение</Link>
          <p className='portfolio__link-icon'>↗</p>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
