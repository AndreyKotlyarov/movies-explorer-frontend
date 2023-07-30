import './MovieCard.css';
import image from '../../images/movie_pic_1.jpg';
import image2 from '../../images/movie_pic_2.jpg';
import image3 from '../../images/movie_pic_3.jpg';

function MovieCard() {
  return (
    <>
      <li className='movie-card'>
        <div className='movie-card__info'>
          <h3 className='movie-card__title'>В погоне за Бенкси</h3>
          <p className='movie-card__duration'>27 минут</p>
        </div>
        <img className='movie-card__image' src={image} alt='В погоне за Бенкси' />
        <button className='movie-card__save-button movie-card__save-button_type_active button'></button>
      </li>

      <li className='movie-card'>
        <div className='movie-card__info'>
          <h3 className='movie-card__title'>В погоне за Бенкси</h3>
          <p className='movie-card__duration'>27 минут</p>
        </div>
        <img className='movie-card__image' src={image2} alt='В погоне за Бенкси' />
        <button className='movie-card__save-button button'>Сохранить</button>
      </li>

      <li className='movie-card'>
        <div className='movie-card__info'>
          <h3 className='movie-card__title'>В погоне за Бенкси</h3>
          <p className='movie-card__duration'>27 минут</p>
        </div>
        <img className='movie-card__image' src={image3} alt='В погоне за Бенкси' />
        <button className='movie-card__save-button movie-card__save-button_type_delete button'></button>
      </li>
      <li className='movie-card'>
        <div className='movie-card__info'>
          <h3 className='movie-card__title'>В погоне за Бенкси</h3>
          <p className='movie-card__duration'>27 минут</p>
        </div>
        <img className='movie-card__image' src={image} alt='В погоне за Бенкси' />
        <button className='movie-card__save-button movie-card__save-button_type_active button'></button>
      </li>

      <li className='movie-card'>
        <div className='movie-card__info'>
          <h3 className='movie-card__title'>В погоне за Бенкси</h3>
          <p className='movie-card__duration'>27 минут</p>
        </div>
        <img className='movie-card__image' src={image2} alt='В погоне за Бенкси' />
        <button className='movie-card__save-button button'>Сохранить</button>
      </li>

      <li className='movie-card'>
        <div className='movie-card__info'>
          <h3 className='movie-card__title'>В погоне за Бенкси</h3>
          <p className='movie-card__duration'>27 минут</p>
        </div>
        <img className='movie-card__image' src={image3} alt='В погоне за Бенкси' />
        <button className='movie-card__save-button movie-card__save-button_type_delete button'></button>
      </li>
    </>
  );
}
export default MovieCard;
