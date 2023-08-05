import './AboutMe.css';
import image from '../../images/pic__COLOR_pic.jpg';
import { Link } from 'react-router-dom';
function AboutMe() {
  return (
    <article className='about-me'>
      <div className='about-me__title-container'>
        <h2 className='about-me__title'>Студент</h2>
      </div>
      <div className='about-me__article'>
        <img className='about-me__photo' src={image} alt='Фото студента' />
        <div className='about-me__paragraph-container'>
          <h3 className='about-me__paragraph-title'>Виталий</h3>
          <p className='about-me__paragraph'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__paragraph'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
            Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link to='https://github.com/AndreyKotlyarov' target='_blank' className='about-me__link link'>
            Github
          </Link>
        </div>
      </div>
    </article>
  );
}

export default AboutMe;
