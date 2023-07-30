import './Profile.css';
function Profile() {
  const username = 'Виталий';
  const email = 'pochta@yandex.ru';

  return (
    <main className='profile__container'>
      <h1 className='profile__title'>Привет, {username} </h1>
      <form className='profile__form' action=''>
        <div className='profile__input-container'>
          <label className='profile__input-label' htmlFor='input__name'>
            Имя
          </label>
          <input id='input__name' className='profile__input' type='text' placeholder={username} />
        </div>
        <div className='profile__input-container'>
          <label className='profile__input-label' htmlFor='input__email'>
            E-mail
          </label>
          <input id='input__email' className='profile__input' type='text' placeholder={email} />
        </div>
      </form>
    </main>
  );
}

export default Profile;
