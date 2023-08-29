import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
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

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

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
  }, []);

  // получение списка фильмов
  useEffect(() => {
    if (loggedIn) {
      moviesApi
        .getMovies()
        .then((res) => {
          setMovies(res);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  // сохранение фильма
  const handleSaveMovie = (movie) => {
    mainApi
      .SaveMovie(movie)
      .then((res) => {
        const updatedSavedMovies = [...savedMovies, { ...res, id: res.movieId }];
        setSavedMovies(updatedSavedMovies);
        localStorage.setItem("savedMovies", JSON.stringify(updatedSavedMovies));
      })
      .catch((err) => console.log(err));
  }

  //удаление фильма
  const handleDeleteMovie = (movie) => {
    mainApi
      .deleteSavedMovie(movie._id)
      .then((res) => {
        const updatedSavedMovies = savedMovies.filter(m => m._id !== movie._id)
        setSavedMovies(updatedSavedMovies);
        localStorage.setItem("savedMovies", JSON.stringify(updatedSavedMovies));
      })
      .catch((err) => console.log(err));
  }

  //редактирование профиля
  function editProfileData(data) {
    mainApi
      .editProfile(data)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
  }

  //выход из аккаунта
  function signOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
  }

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          <Route
            path="/signup"
            element={<Register handleRegister={handleRegister} />}
          />
          <Route
            path="/signin"
            element={<Login handleLogin={handleLogin} />}
          />
          <Route path="/movies" element={
            <ProtectedRouteElement
              element={Movies}
              onMovieSave={handleSaveMovie}
              savedMovie={savedMovies}
              onMovieDelete={handleDeleteMovie}
              movies={movies}
              loggedIn={loggedIn}
            />
          } />
          <Route path="/saved-movies" element={
            <ProtectedRouteElement
              element={SavedMovies}
              // onEditProfile={handleEditProfileClick}
              // onAddPlace={handleAddPlaceClick}
              // onEditAvatar={handleEditAvatarClick}
              // onClose={closeAllPopups}
              // onCardClick={handleCardClick}
              // onCardLike={handleCardLike}
              // onCardDelete={handleCardDelete}
              movies={movies}
              loggedIn={loggedIn}
            />
          } />
          <Route path="/profile" element={
            <ProtectedRouteElement
              element={Profile}
              onEditProfile={editProfileData}
              signOut={signOut}
              loggedIn={loggedIn}
            />
          } />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
