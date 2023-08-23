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
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState("");
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  const handleLogin = (email, password) => {
    auth
      .authorize(email, password)
      .then((res) => {
        localStorage.setItem("token", res.token);
        setLoggedIn(true);
        setUserData(email);
        navigate("/movies");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRegister = (name, email, password) => {
    return auth
      .register(name, email, password)
      .then((res) => {
        console.log(res);
        navigate("/movies", { replace: true });
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
            const email = res.data.email;
            setLoggedIn(true);
            setUserData(email);
            navigate("/movies");
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

  useEffect(() => {
    if (loggedIn) {
      // api
      //   .getProfileData()
      //   .then((res) => {
      //     setCurrentUser(res);
      //   })
      //   .catch((err) => console.log(err));
      moviesApi
        .getMovies()
        .then((res) => {
          setMovies(res);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main />} />
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
              // onEditProfile={handleEditProfileClick}
              // onAddPlace={handleAddPlaceClick}
              // onEditAvatar={handleEditAvatarClick}
              // onClose={closeAllPopups}
              // onCardClick={handleCardClick}
              // onCardLike={handleCardLike}
              // onCardDelete={handleCardDelete}
              // cards={cards}
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
              // cards={cards}
              loggedIn={loggedIn}
            />
          } />
          <Route path="/profile" element={
            <ProtectedRouteElement
              element={Profile}
              // onEditProfile={handleEditProfileClick}
              // onAddPlace={handleAddPlaceClick}
              // onEditAvatar={handleEditAvatarClick}
              // onClose={closeAllPopups}
              // onCardClick={handleCardClick}
              // onCardLike={handleCardLike}
              // onCardDelete={handleCardDelete}
              // cards={cards}
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
