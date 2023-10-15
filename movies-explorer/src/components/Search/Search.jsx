import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Search.css';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

function Search({ handleSearch, handleCheckbox, isChecked, setIsChecked, setSavedMoviesChecked }) {
  const location = useLocation();
  const { values, handleChange, errors, setValues, isValid, setIsValid } = useFormAndValidation();

  // const [searchQuery, setSearchQuery] = useState('');

  // function handleSetSearchQuery(e) {
  //   setSearchQuery(e.target.value);
  // }
  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setValues({ searchQuery: '' });
      setIsChecked(false);
      setSavedMoviesChecked(false);
    }
  }, [location.pathname]);
  useEffect(() => {
    if (!(localStorage.getItem('searchQuery') && location.pathname === '/movies')) {
      return;
    } else {
      setValues({ searchQuery: localStorage.getItem('searchQuery') });
      setIsValid(true);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(values.searchQuery);
  }

  return (
    <section className='search'>
      <form className='search__form' onSubmit={handleSubmit} noValidate>
        <div className='search__input-container'>
          <input
            name='searchQuery'
            value={values.searchQuery || ''}
            onChange={handleChange}
            className='search__input input'
            required
            type='text'
            placeholder='Фильм'
          />
          <span className='search__user-message'>{errors.searchQuery ? 'Нужно ввести ключевое слово' : ''}</span>
          <button className='search__button button' type='submit' disabled={!isValid} />
        </div>
        <div className='search__thumbler-container'>
          <input
            onInput={handleSubmit}
            onChange={handleCheckbox}
            className='search__thumbler'
            type='checkbox'
            id='search__thumbler'
            checked={isChecked}
          />
          <label className='search__thumbler-label' htmlFor='search__thumbler'>
            Короткометражки
          </label>
        </div>
      </form>
    </section>
  );
}
export default Search;
