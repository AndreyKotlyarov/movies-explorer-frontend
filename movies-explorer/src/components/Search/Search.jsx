import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Search.css';

function Search({ findMovies, handleCheckbox, isChecked }) {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  function handleSetSearchQuery(e) {
    setSearchQuery(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    findMovies(searchQuery);
  }

  useEffect(() => {
    if (!(localStorage.getItem('searchQuery') && location.pathname === '/movies')) {
      return;
    } else {
      setSearchQuery(localStorage.getItem('searchQuery'));
    }
  }, []);

  return (
    <section className='search'>
      <form className='search__form' onSubmit={handleSubmit} noValidate>
        <div className='search__input-container'>
          <input value={searchQuery} onChange={handleSetSearchQuery} className='search__input input' required type='text' placeholder='Фильм' />
          <button className='search__button button' type='submit' />
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
