import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({isOpen}) {
  const navigationActive = `navigation ${isOpen ? 'navigation' : 'navigation_hidden'}`;

  return (
    <div className='navigation'>
        <ul className='navigation__items'>
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
    </div>
  );
}

export default Navigation;
