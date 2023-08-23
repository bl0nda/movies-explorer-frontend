import { useState } from "react";
import { useLocation, Link, NavLink } from "react-router-dom";
import './Header.css';
import Navigation from "../Navigation/Navigation";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header() {

  const [loggedIn, setLoggedIn] = useState(false);

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    if(isBurgerMenuOpen === false) {
    setIsBurgerMenuOpen(true);
    } else {
      setIsBurgerMenuOpen(false);
    }
  }

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
              <BurgerMenu
                isOpen={isBurgerMenuOpen}
                onClick={toggleBurgerMenu} />
              <Navigation isOpen={isBurgerMenuOpen}/>
            </div>
          )
        }
      </div>
    </header >
  );
}

export default Header;
