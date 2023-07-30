import { Routes, Route, Link } from "react-router-dom";

function Header({ userData, signOut }) {

   return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__nav">
        <p className="header__user-data">{userData}</p>
        <Routes>
          <Route
            path="sign-in"
            element={
              <Link className="header__link" to="/sign-up">
                Регистрация
              </Link>
            }
          />
          <Route
            path="sign-up"
            element={
              <Link className="header__link" to="/sign-in">
                Войти
              </Link>
            }
          />
          <Route
            path="cards"
            element={
              <Link className="header__link" to="/sign-in" onClick={signOut}>
                Выйти
              </Link>
            }
          />
        </Routes>
      </div>
    </header>
  );
}

export default Header;
