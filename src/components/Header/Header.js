import { Routes, Route, Link } from "react-router-dom";
import './Header.css';

function Header() {

  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__nav">
        <p className="header__link">Фильмы</p>
        <p className="header__link">Сохраненные фильмы</p>
        {/* <Routes>
          <Route
            path="movies"
            element={
              <Link className="header__link" to="/movies">
                Фильмы
              </Link>
            }
          />
          <Route
            path="__"
            element={
              <Link className="header__link" to="/__">
                Сохраненные фильмы
              </Link>
            }
          />
        </Routes> */}
      </div>
      <div className="header__profile">
        <p className="header__profile_link">Аккаунт</p>
        {/* <Routes>
          <Route
            path="users/me"
            element={<Link className="header__profile_link" to="/users/me">
              Аккаунт
            </Link>
            }
          />
        </Routes> */}
        <div className="header__profile_logo"></div>
      </div >
    </header >
  );
}

export default Header;
