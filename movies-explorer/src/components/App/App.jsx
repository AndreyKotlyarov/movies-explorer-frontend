import './App.css';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path='/movies'
          element={
            <>
              <Header isLoggedIn={true} />
              <Movies />
              <Footer />
            </>
          }
        />
        <Route
          path='/saved-movies'
          element={
            <>
              <Header isLoggedIn={true} />
              <SavedMovies />
              <Footer />
            </>
          }
        />
        <Route
          path='/profile'
          element={
            <>
              <Header isLoggedIn={true} />
              <Profile />
              <Footer isLoggedIn={true} />
            </>
          }
        />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

// по роуту / отображается страница «О проекте»;
// по роуту /movies отображается страница «Фильмы»;
// по роуту /saved-movies отображается страница «Сохранённые фильмы»;
// по роуту /profile отображается страница с профилем пользователя;
// по роутам /signin и /signup отображаются страницы авторизации и регистрации.
