import './App.css';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';

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
import { SHORT_MOVIE_DURATION } from '../../utils/consts';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setToken(token);
  }, []);

  useEffect(() => {
    if (!token) {
      return;
    }
    mainApi.setToken(token);
    mainApi
      .getCurrentUser()
      .then((data) => {
        setCurrentUser({ name: data.name, email: data.email, id: data._id });
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', isLoggedIn);
        downloadSavedMovies();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token, isLoggedIn]);

  const registerUser = (email, password, name) => {
    mainApi
      .register(email, password, name)
      .then((res) => {
        localStorage.setItem('token', res.token);
        setToken(res.token);
      })
      .then(() => loginUser(email, password))
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
        <Navigate to='/movies' />;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [isSuccess, setIsSuccess] = useState(null);

  function handleUpdateUser(name, email) {
    mainApi
      .patchUserData(name, email)
      .then((userData) => {
        setCurrentUser(userData);
        setIsSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setIsSuccess(false);
      });
  }

  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('searchQuery');
    localStorage.removeItem('isChecked');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('filteredMoviesCards');
    localStorage.removeItem('downloadedMovies');
    localStorage.removeItem('foundMovies');

    setToken('');
    setCurrentUser({});
    setIsLoggedIn(false);
    setIsChecked(false);
    setSavedMoviesCards([]);
    setFilteredSavedMoviesCards([]);
    setFilteredMoviesCards([]);
    navigate('/');
  };

  ///////////////////////////////////// Movies /////////////////////////////////////
  const [filteredMoviesCards, setFilteredMoviesCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isDownloadError, setIsDownloadError] = useState(false);
  const [isMoviesNotFound, setIsMoviesNotFound] = useState(false);

  useEffect(() => {
    if (!(localStorage.getItem('isChecked') && location.pathname === '/movies')) {
      return;
    } else {
      setIsChecked(JSON.parse(localStorage.getItem('isChecked')));
    }
  }, [location.pathname]);

  async function downloadMovies() {
    setIsLoading(true);
    try {
      const movies = await moviesApi.getMoviesCards();
      localStorage.setItem('downloadedMovies', JSON.stringify(movies));
      setIsLoading(false);
      setIsDownloadError(false);
      return movies;
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setIsDownloadError(true);
      return [];
    }
  }

  function filterMoviesByQuery(movies, searchQuery) {
    const ruFilms = movies.filter((item) => item.nameRU.toLowerCase().includes(searchQuery.toLowerCase()));
    const enFilms = movies.filter((item) => item.nameEN.toLowerCase().includes(searchQuery.toLowerCase()));
    const newSet = new Set(ruFilms.concat(enFilms));
    const filteredMoviesArray = Array.from(newSet);
    return filteredMoviesArray;
  }

  function sortShortMovies(movies, isChecked) {
    if (isChecked) {
      return movies.filter((item) => item.duration <= SHORT_MOVIE_DURATION);
    } else {
      return movies;
    }
  }

  function findMovies(movies, searchQuery) {
    if (!searchQuery) {
      return;
    } else {
      const filteredByQueryMovies = filterMoviesByQuery(movies, searchQuery);
      if (isChecked) {
        const sortedShortMovies = sortShortMovies(filteredByQueryMovies, isChecked);
        setFilteredMoviesCards(sortedShortMovies);

        if (sortedShortMovies.length === 0) {
          setIsMoviesNotFound(true);
        } else setIsMoviesNotFound(false);
        return sortedShortMovies;
      } else {
        setFilteredMoviesCards(filteredByQueryMovies);
        if (filteredByQueryMovies.length === 0) {
          setIsMoviesNotFound(true);
        } else setIsMoviesNotFound(false);
        return filteredByQueryMovies;
      }
    }
  }

  function handleCheckbox() {
    setIsChecked(!isChecked);
    findMovies();
  }

  async function handleSearch(searchQuery) {
    if (!JSON.parse(localStorage.getItem('downloadedMovies'))) {
      const movies = await downloadMovies();
      localStorage.setItem('isChecked', isChecked);

      localStorage.setItem('searchQuery', searchQuery);
      return findMovies(movies, searchQuery);
    } else {
      const movies = JSON.parse(localStorage.getItem('downloadedMovies'));
      const foundMovies = findMovies(movies, searchQuery);
      localStorage.setItem('isChecked', isChecked);

      localStorage.setItem('searchQuery', searchQuery);
      localStorage.setItem('foundMovies', JSON.stringify(foundMovies));

      return foundMovies;
    }
  }
  ///////////////////////////////////// Movies /////////////////////////////////////

  ///////////////////////////////////// Saved Movies /////////////////////////////////////
  const [savedMoviesCards, setSavedMoviesCards] = useState([]);
  const [filteredSavedMoviesCards, setFilteredSavedMoviesCards] = useState([]);

  async function downloadSavedMovies() {
    try {
      setIsLoading(true);
      const savedMovies = await mainApi.getSavedMovies();
      setSavedMoviesCards(savedMovies);
      setIsLoading(false);
      setIsDownloadError(false);
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setIsDownloadError(true);
      return [];
    }
  }
  async function findSavedMovies(searchQuery) {
    if (!searchQuery && isChecked) {
      setFilteredSavedMoviesCards(JSON.parse(localStorage.getItem('savedMovies')));
      const sortedShortMovies = sortShortMovies(filteredSavedMoviesCards, isChecked);
      setFilteredSavedMoviesCards(sortedShortMovies);
      return sortedShortMovies;
    } else if (!searchQuery) {
      setFilteredSavedMoviesCards(JSON.parse(localStorage.getItem('savedMovies')));
      return JSON.parse(localStorage.getItem('savedMovies'));
    } else {
      const filteredByQueryMovies = filterMoviesByQuery(savedMoviesCards, searchQuery);
      if (isChecked) {
        const sortedShortMovies = sortShortMovies(filteredByQueryMovies, isChecked);
        setFilteredSavedMoviesCards(sortedShortMovies);
        return sortedShortMovies;
      } else {
        setFilteredSavedMoviesCards(filteredByQueryMovies);
        return filteredByQueryMovies;
      }
    }
  }

  async function handleSavedMoviesSearch(searchQuery) {
    if (!token) {
      mainApi.setToken(localStorage.getItem('token'));
    }
    await downloadSavedMovies();
    findSavedMovies(searchQuery);
  }
  function handleSavedMoviesCheckbox() {
    setIsChecked(!isChecked);
    findSavedMovies();
  }

  ///////////////////////////////////// Saved Movies /////////////////////////////////////

  ///////////////////////////////////// Handle Save/Delete Movie /////////////////////////////////////
  function handleSaveMovie(movie) {
    mainApi
      .saveMovie(movie)
      .then((newMovie) => {
        setSavedMoviesCards([newMovie, ...savedMoviesCards]);
      })
      .catch((err) => console.log(err));
  }

  function handleDeleteMovie(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMoviesCards((state) => state.filter((item) => item._id !== movie._id));
      })
      .catch((err) => console.log(err));
  }

  ///////////////////////////////////// Handle Save/Delete Movie /////////////////////////////////////

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
              <ProtectedRouteElement>
                <Header />
                <Movies
                  handleSearch={handleSearch}
                  handleCheckbox={handleCheckbox}
                  isLoading={isLoading}
                  isDownloadError={isDownloadError}
                  isMoviesNotFound={isMoviesNotFound}
                  moviesCards={filteredMoviesCards}
                  isChecked={isChecked}
                  handleSaveMovie={handleSaveMovie}
                  handleDeleteMovie={handleDeleteMovie}
                  savedMoviesCards={savedMoviesCards}
                />
                <Footer />
              </ProtectedRouteElement>
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRouteElement>
                <Header />
                <SavedMovies
                  isLoading={isLoading}
                  handleSearch={handleSavedMoviesSearch}
                  handleCheckbox={handleSavedMoviesCheckbox}
                  isDownloadError={isDownloadError}
                  isMoviesNotFound={isMoviesNotFound}
                  moviesCards={filteredSavedMoviesCards}
                  handleDeleteMovie={handleDeleteMovie}
                  savedMoviesCards={savedMoviesCards}
                />
                <Footer />
              </ProtectedRouteElement>
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRouteElement>
                <Header />
                <Profile logOut={logOut} onUserUpdate={handleUpdateUser} isSuccess={isSuccess} />
              </ProtectedRouteElement>
            }
          />
          <Route path='/signup' element={isLoggedIn ? <Navigate to='/movies' /> : <Register registerUser={registerUser} />} />
          <Route path='/signin' element={isLoggedIn ? <Navigate to='/movies' /> : <Login loginUser={loginUser} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
