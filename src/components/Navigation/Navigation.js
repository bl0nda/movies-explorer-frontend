import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation({ isOpen }) {
  const navigationActive = `navigation ${isOpen ? 'navigation' : 'navigation_hidden'}`;
  const mainLinkVisible = `navigation__item ${isOpen ? 'navigation__item' : 'navigation__item_hidden'}`;
  const linkColor = `${'navigation__link'} ${useLocation().pathname === "/" ? 'navigation__link_white' : 'navigation__link_black'}`;
  const profileLinkColor = `${'navigation__profile-link'} ${useLocation().pathname === "/" ? 'navigation__profile-link_white' : 'navigation__profile-link_black'}`;
  const navigationProfileLogoColor = `${'navigation__profile-logo'} ${useLocation().pathname === "/" ? 'navigation__profile-logo_white' : 'navigation__profile-logo_black'}`;

  return (
    <div className={navigationActive}>
      <nav className="navigation__menu">
        <ul className='navigation__items'>
          <li className={mainLinkVisible}>
            <Link to='/' className='navigation__link'>Главная</Link>
          </li>
          <li className='navigation__item'>
            <Link to='/movies' className={linkColor}>Фильмы</Link>
          </li>
          <li className='navigation__item'>
            <Link to='/saved-movies' className={linkColor}>Сохранённые фильмы</Link>
          </li>
        </ul>
        <Link to='/profile' className="navigation__profile">
          <p className={profileLinkColor}>Аккаунт</p>
          <div className={navigationProfileLogoColor}></div>
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;