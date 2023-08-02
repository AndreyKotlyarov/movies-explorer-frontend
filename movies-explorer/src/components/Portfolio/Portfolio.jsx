import './Portfolio.css';
import { Link } from 'react-router-dom';
function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li className='portfolio__link-container'>
          <Link to='https://andreykotlyarov.github.io/how-to-learn/index.html' target='_blank' className='portfolio__link link'>
            <span className='portfolio__link-span'>Статичный сайт</span>
            <span className='portfolio__link-span'>↗</span>
          </Link>
        </li>
        <li className='portfolio__link-container'>
          <Link to='https://andreykotlyarov.github.io/russian-travel/index.html' target='_blank' className='portfolio__link link'>
            <span className='portfolio__link-span'>Адаптивный сайт</span>
            <span className='portfolio__link-span'>↗</span>
          </Link>
        </li>
        <li className='portfolio__link-container'>
          <Link to='https://andreykotlyarov.github.io/react-mesto-auth/' target='_blank' className='portfolio__link link'>
            <span className='portfolio__link-span'>Одностраничное приложение</span>
            <span className='portfolio__link-span'>↗</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
