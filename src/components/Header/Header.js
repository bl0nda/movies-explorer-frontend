import { useState } from "react";
import { useLocation, Link, NavLink } from "react-router-dom";
import './Header.css';
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Navigation from "../Navigation/Navigation";

function Header() {
  
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <header 
    className="background"
    style={{
      background: useLocation().pathname === "/" ? "#465dff" : "#fff",
    }}>
      <div className="header">
        <Link to="/" className="header__logo-link"></Link>
        {!loggedIn ? (<div className="header__main">
          <NavLink to="/signup" className="header__main-link">Регистрация</NavLink>
          <NavLink to="/signin" className="header__main-link header__main-link_active">Войти</NavLink>
        </div>)
          : (
            <div className="header__container">
              <Navigation />
              {/* <BurgerMenu /> */}
            </div>
          )
        }
      </div>
    </header >
  );
}

export default Header;
