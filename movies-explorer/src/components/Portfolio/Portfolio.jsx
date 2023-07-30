import './Portfolio.css';
import { Link } from 'react-router-dom';
function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li className='portfolio__link-container'>
          <Link to='https://andreykotlyarov.github.io/how-to-learn/index.html' target='_blank' className='portfolio__link link'>
            Статичный сайт
          </Link>
          <p className='portfolio__link'>↗</p>
        </li>
        <li className='portfolio__link-container'>
          <Link to='https://andreykotlyarov.github.io/russian-travel/index.html' target='_blank' className='portfolio__link link'>
            Адаптивный сайт
          </Link>
          <p className='portfolio__link'>↗</p>
        </li>
        <li className='portfolio__link-container'>
          <Link to='https://andreykotlyarov.github.io/react-mesto-auth/' target='_blank' className='portfolio__link link'>
            Одностраничное приложение
          </Link>
          <p className='portfolio__link'>↗</p>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
