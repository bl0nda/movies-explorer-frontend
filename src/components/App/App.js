import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import Main from '../Main/Main';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { Profile } from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Page404 from '../Page404/Page404';
import * as auth from "../../utils/auth";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute.js";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [statusInfoTooltip, setStatusInfoTooltip] = useState(false);

  const [error, setError] = useState("");

  const handleLogin = (email, password) => {
    auth
      .authorize(email, password)
      .then((res) => {
        localStorage.setItem("token", res.token);
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => {
        console.log(err);
        if (err === 'Ошибка: 401') {
          setError('Неправильный логин или пароль');
        }
        if (err === 'Ошибка: 500') {
          setError('На сервере произошла ошибка');
        }
        else {
          setError('При авторизации пользователя произошла ошибка');
        }
      });
  };

  const handleRegister = (name, email, password) => {
    return auth
      .register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        console.log(err);
        if (err === 'Ошибка: 409') {
          setError('Пользователь с таким email уже существует');
        } else if (err === 'Ошибка: 500') {
          setError('На сервере произошла ошибка');
        } else {
          setError('При регистрации пользователя произошла ошибка');
        }
      })
  };

  const tokenCheck = () => {
    const token = localStorage.getItem("token");
    if (token) {
      auth
        .getContent(token)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);
            navigate("/movies", { replace: true });
          } else {
            setLoggedIn(false);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    tokenCheck();
  }, [loggedIn]);

  // получение списка сохраненных фильмов
  const getSavedMovies = () => {
    mainApi
      .getSavedMovies()
      .then((res) => {
        setSavedMovies(res);
      })
      .catch((err) => console.log(err));
  }

  // получение списка фильмов
  useEffect(() => {
    if (loggedIn) {
      moviesApi
        .getMovies()
        .then((res) => {
          setMovies(res);
        })
        .catch((err) => console.log(err));
      getSavedMovies();
    }
  }, [loggedIn]);

  // сохранение фильма
  const handleSaveMovie = (movie) => {
    mainApi
      .SaveMovie(movie)
      .then((res) => {
        getSavedMovies();
        // console.log(res);
        // savedMovies.push(res);
        // console.log(savedMovies);
      })
      .catch((err) => console.log(err));
  }

  //удаление фильма
  const handleDeleteMovie = (movie) => {
    mainApi
      .deleteSavedMovie(movie.movieId || movie.id)
      .then(() => {
        getSavedMovies();
      })
      .catch((err) => console.log(err));
  }

  //редактирование профиля
  function editProfileData(data) {
    mainApi
      .editProfile(data)
      .then((res) => {
        setCurrentUser(res);
        setStatusInfoTooltip(true);
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          setError("При обновлении профиля произошла ошибка.");
        }
        setStatusInfoTooltip(false);
      })
      .finally(() => {
        setIsInfoTooltipPopupOpen(true);
      });
  }

  //выход из аккаунта
  function signOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setCurrentUser({});
    localStorage.removeItem("searchResults");
    localStorage.removeItem("checkboxState");
    localStorage.removeItem("searchQuery");
    navigate("/");
  }

  function closeAllPopups() {
    setIsInfoTooltipPopupOpen(false);
  }

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          <Route
            path="/signup"
            element={<Register handleRegister={handleRegister} error={error} />}
          />
          <Route
            path="/signin"
            element={<Login handleLogin={handleLogin} error={error} />}
          />
          <Route path="/movies" element={
            <ProtectedRouteElement
              element={Movies}
              movies={movies}
              loggedIn={loggedIn}
              onMovieSave={handleSaveMovie}
              savedMovie={savedMovies}
              onMovieDelete={handleDeleteMovie}
            />
          } />
          <Route path="/saved-movies" element={
            <ProtectedRouteElement
              element={SavedMovies}
              movies={movies}
              savedMovies={savedMovies}
              onMovieDelete={handleDeleteMovie}
              loggedIn={loggedIn}
            />
          } />
          <Route path="/profile" element={
            <ProtectedRouteElement
              element={Profile}
              onEditProfile={editProfileData}
              signOut={signOut}
              loggedIn={loggedIn}
              error={error}
            />
          } />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <InfoTooltip
          isOpen={isInfoTooltipPopupOpen}
          onClose={closeAllPopups}
          status={statusInfoTooltip}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
