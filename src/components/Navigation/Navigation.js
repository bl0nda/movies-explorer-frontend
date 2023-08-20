import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({ isOpen }) {
  const navigationActive = `navigation ${isOpen ? 'navigation' : 'navigation_hidden'}`;
  const mainLinkVisible = `navigation__item ${isOpen ? 'navigation__item' : 'navigation__item_hidden'}`;

  return (
    <div className={navigationActive}>
      <nav className="navigation__menu">
        <ul className='navigation__items'>
          <li className={mainLinkVisible}>
            <Link to='/' className='navigation__link'>Главная</Link>
          </li>
          <li className='navigation__item'>
            <Link to='/movies' className='navigation__link'>Фильмы</Link>
          </li>
          <li className='navigation__item'>
            <Link to='/saved-movies' className='navigation__link'>Сохранённые фильмы</Link>
          </li>
        </ul>
        <Link to='/profile' className="navigation__profile">
          <p className="navigation__profile-link">Аккаунт</p>
          <div className="navigation__profile-logo"></div>
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;