import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';
function Profile({ logOut, onUserUpdate }) {
  const { values, handleChange, errors, setValues, isValid } = useFormAndValidation();
  const currentUser = useContext(CurrentUserContext);
  const userName = currentUser.name;
  const userEmail = currentUser.email;

  useEffect(() => {
    setValues({
      name: userName,
      email: userEmail,
    });
  }, [userName, userEmail, setValues]);
  function handleSubmit(e) {
    e.preventDefault();
    onUserUpdate(values.name, values.email);
  }
  return (
    <main className='profile'>
      <h1 className='profile__title'>Привет, {userName} </h1>
      <form className='profile__form' action='#' onSubmit={handleSubmit}>
        <div className='profile__input-container'>
          <label className='profile__input-label' htmlFor='input__name'>
            Имя
          </label>
          <input
            value={values.name || ''}
            onChange={handleChange}
            name='name'
            id='input__name'
            className='profile__input input'
            minLength='2'
            maxLength='30'
            type='text'
            placeholder='Латиница, кириллица, пробел или дефис'
          />
        </div>
        <div className='profile__input-container'>
          <label className='profile__input-label' htmlFor='input__email'>
            E-mail
          </label>
          <input
            name='email'
            value={values.email || ''}
            onChange={handleChange}
            id='input__email'
            className='profile__input input'
            type='email'
            placeholder='Электронная почта'
          />
        </div>

        <span className='profile__error-message profile__error-message_active'>{errors.email || errors.name || ''}</span>

        <section className='profile__links-section'>
          <button type='submit' className={`profile__submit-button button ${isValid ? '' : 'button_type_disabled'}`} disabled={!isValid}>
            Редактировать
          </button>
          <Link to={'/'} onClick={logOut} className='profile__link link'>
            Выйти из аккаунта
          </Link>
        </section>
      </form>
    </main>
  );
}

export default Profile;
