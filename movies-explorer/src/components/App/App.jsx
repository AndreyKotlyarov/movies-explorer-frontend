import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  useEffect(() => {
    const token = localStorage.getItem('token');
    setToken(token);
  }, []);

  useEffect(() => {
    if (!token) {
      return;
    }
    mainApi
      .getUserData(token)
      .then((data) => {
        setUserData(data.data);
        setIsLoggedIn(true);
        // navigate('/movies');
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token, navigate]);

  const registerUser = (email, password) => {
    mainApi
      .register(email, password)
      .then((res) => {
        localStorage.setItem('token', res.token);
        setToken(res.token);
        navigate('/signin');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginUser = (email, password) => {
    mainApi
      .authorize(email, password)
      .then((res) => {
        localStorage.setItem('token', res.token);
        setToken(res.token);
        navigate('/movies');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logOut = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setToken('');
    setUserData({
      password: '',
      email: '',
    });
    navigate('/');
  };

  useEffect(() => {
    if (!token) {
      return;
    }
    mainApi
      .getUserData()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [moviesCards, setMoviesCards] = useState([]);
  // загружаем все фильмы с Beatfilms
  useEffect(() => {
    moviesApi
      .getMoviesCards()
      .then((moviesCards) => {
        setMoviesCards(moviesCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header isLoggedIn={isLoggedIn} />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path='/movies'
            element={
              <>
                <Header isLoggedIn={isLoggedIn} />
                <Movies moviesCards={moviesCards} />
                <Footer />
              </>
            }
          />
          <Route
            path='/saved-movies'
            element={
              <>
                <Header isLoggedIn={isLoggedIn} />
                <SavedMovies />
                <Footer />
              </>
            }
          />
          <Route
            path='/profile'
            element={
              <>
                <Header isLoggedIn={isLoggedIn} />
                <Profile logOut={logOut} />
              </>
            }
          />
          <Route path='/signup' element={<Register registerUser={registerUser} />} />
          <Route path='/signin' element={<Login loginUser={loginUser} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

// по роуту / отображается страница «О проекте»;
// по роуту /movies отображается страница «Фильмы»;
// по роуту /saved-movies отображается страница «Сохранённые фильмы»;
// по роуту /profile отображается страница с профилем пользователя;
// по роутам /signin и /signup отображаются страницы авторизации и регистрации.
