import './Search.css';
function Search() {
  return (
    <form className='search__container'>
      <div className='search__input-container'>
        <input className='search__input' type='text' placeholder='Фильм' />
        <button className='search__button' type='submit' />
      </div>
      <div className='search__thumbler-container'>
        <input className='search__thumbler' type='checkbox' id='search__thumbler' />
        <label className='search__thumbler-label' htmlFor='search__thumbler'>
          Короткометражки
        </label>
      </div>
    </form>
  );
}
export default Search;
