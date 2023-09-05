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

  const [searchQuery, setSearchQuery] = useState(() => localStorage.getItem("searchQuery") || ""); // текст запроса
  const [searchQueryInSaved, setSearchQueryInSaved] = useState("");
  const [searchResults, setSearchResults] = useState(JSON.parse(localStorage.getItem("searchResults")) || []); //результаты поиска
  const [searchResultsInSaved, setSearchResultsInSaved] = useState([]);
  const [searchResultsFiltered, setSearchResultsFiltered] = useState([]); // рез-ты поиска с учетом фильтрации по короткометражкам
  const [searchResultsFilteredInSaved, setSearchResultsFilteredInSaved] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isSearchSuccess, setIsSearchSuccess] = useState(true);

  const [isChecked, setIsChecked] = useState(() => JSON.parse(localStorage.getItem("checkboxState")) || false);
  const [isCheckedInSaved, setIsCheckedInSaved] = useState(false);

  const [isNumberOfMoviesShown, setIsNumberOfMoviesShown] = useState(12);
  const [isNumberToAddMovies, setIsNumberToAddMovies] = useState(3);
  const [isMoreBtnShown, setIsMoreBtnShown] = useState(true);

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

  //поиск фильмов
  const handleSearchQueryChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    localStorage.setItem("searchQuery", searchQuery);
  };

  function handleSearch() {
    setIsLoading(true);
    setIsSearchSuccess(false);
    setTimeout(() => {
      const results = movies.filter((movie) =>
        movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
      localStorage.setItem("searchResults", JSON.stringify(results));
      setIsSearchSuccess(results.length > 0);
      setIsLoading(false);
    }, 2000);
  };

  //поиск фильмов по сохраненным
  const handleSearchQueryChangeInSaved = (event) => {
    const query = event.target.value;
    console.log(query);
    setSearchQueryInSaved(query);
  };

  useEffect(() => {
    const results = savedMovies.filter((movie) => isChecked ? movie.duration <= 40 : true)
      .filter((movie) =>
        movie.nameRU.toLowerCase().includes(searchQueryInSaved.toLowerCase()) 
        || movie.nameEN.toLowerCase().includes(searchQueryInSaved.toLowerCase()));
        setSearchResultsInSaved(results);
  }, [isChecked, searchQueryInSaved, savedMovies])

// function filterInSaved() {
//   const results = savedMovies.filter((movie) => isChecked ? movie.duration <= 40 : true)
//       .filter((movie) =>
//         movie.nameRU.toLowerCase().includes(searchQueryInSaved.toLowerCase()) 
//         || movie.nameEN.toLowerCase().includes(searchQueryInSaved.toLowerCase()));
//         setSearchResultsInSaved(results);
// }

  function handleSearchInSaved() {
    const results = savedMovies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchQueryInSaved.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchQueryInSaved.toLowerCase())
    );
    setSearchResultsInSaved(results);
  };

  //переключение фильтрации
  const handleChecked = () => {
    setIsChecked(!isChecked);
    localStorage.setItem("checkboxState", JSON.stringify(!isChecked));
  }

  //настройка фильтра отображения короткометражек для movies
  useEffect(() => {
    if (isChecked) {
      setSearchResultsFiltered(searchResults.filter((movie) => movie.duration <= 40));
    } else {
      setSearchResultsFiltered(searchResults);
    }
  }, [searchResults, isChecked]);

  //переключение фильтрации на странице с сохраненными фильмами
  const handleCheckedInSaved = () => {
    setIsCheckedInSaved(!isCheckedInSaved);
  }

  //настройка фильтра отображения короткометражек для saved-movies
  useEffect(() => {
    if (isCheckedInSaved) {
      setSearchResultsFilteredInSaved(searchResultsInSaved.filter((movie) => movie.duration <= 40) || savedMovies.filter((movie) => movie.duration <= 40));
    } else {
      setSearchResultsFilteredInSaved(searchResultsInSaved);
    }
  }, [searchResultsInSaved, isCheckedInSaved]);

  //установка кол-ва отображаемых карточек на странице
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 805) {
        setIsNumberOfMoviesShown(12);
        setIsNumberToAddMovies(3);
      } else if (window.innerWidth > 450 && window.innerWidth <= 805) {
        setIsNumberOfMoviesShown(8);
        setIsNumberToAddMovies(2);
      } else if (window.innerWidth <= 450) {
        setIsNumberOfMoviesShown(5);
        setIsNumberToAddMovies(2);
      }
    };

    handleResize();

    setTimeout(() => {
      window.addEventListener('resize', handleResize);
    }, 2000);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //кнопка "показать ещё"
  const handleChangeMoreBtn = () => {
    if (searchResults.length > isNumberOfMoviesShown) {
      setIsMoreBtnShown(true);
    } else {
      setIsMoreBtnShown(false);
    }
  };

  const loadMore = () => {
    setIsNumberOfMoviesShown(isNumberOfMoviesShown + isNumberToAddMovies);
  };

  const displayedMovies = searchResultsFiltered.slice(0, isNumberOfMoviesShown);

  // сохранение фильма
  const handleSaveMovie = (movie) => {
    mainApi
      .SaveMovie(movie)
      .then(() => {
        getSavedMovies();
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



  //настройка скрытия кнопки "Ещё"
  useEffect(() => {
    handleChangeMoreBtn();
  }, [loadMore, handleSearch]);

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
              displayedMovies={displayedMovies}
              loggedIn={loggedIn}
              onMovieSave={handleSaveMovie}
              savedMovie={savedMovies}
              onMovieDelete={handleDeleteMovie}
              isLoading={isLoading}
              handleSearch={handleSearch}
              searchStatus={isSearchSuccess}
              searchQuery={searchQuery}
              handleSearchQueryChange={handleSearchQueryChange}
              isChecked={isChecked}
              handleChecked={handleChecked}
              isMoreBtnShown={isMoreBtnShown}
              loadMore={loadMore}
            />
          } />
          <Route path="/saved-movies" element={
            <ProtectedRouteElement
              element={SavedMovies}
              savedMovies={savedMovies}
              onMovieDelete={handleDeleteMovie}
              loggedIn={loggedIn}
              isChecked={isCheckedInSaved}
              handleChecked={handleCheckedInSaved}
              handleSearch={handleSearchInSaved}
              searchQuery={searchQueryInSaved}
              handleSearchQueryChange={handleSearchQueryChangeInSaved}
              searchStatus={isSearchSuccess}
              searchResults={searchResultsFilteredInSaved}
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
