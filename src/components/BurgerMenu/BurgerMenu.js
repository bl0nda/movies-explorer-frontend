import './BurgerMenu.css';
import { Link } from 'react-router-dom';

function BurgerMenu({ isOpen }) {

    const burgerButton = `burger-menu__btn ${isOpen ? 'burger-menu__btn_hidden' : 'burger-menu__btn'}`;
    const burgerActive = `burger-menu ${isOpen ? 'burger-menu_active' : ' '}`;

    return (
        <>
            <button
                type='button'
                className='burger-menu__btn_hidden'
            />
            <div className='burger-menu_active'>
                <div className='burger-menu__container'>
                    <button
                        type='button'
                        className="burger-menu__close-btn" />
                    <div className='burger-menu__links-container'>
                        <nav className="burger-menu__links">
                            <Link className="burger-menu__link" to="/">Главная</Link>
                            <Link className="burger-menu__link burger-menu__link_active" to="/movies">Фильмы</Link>
                            <Link className="burger-menu__link" to="/saved-movies">Сохранённые фильмы</Link>
                        </nav>
                        <Link to='/profile' className="burger-menu__profile">
                            <p className="burger-menu__profile-link">Аккаунт</p>
                            <div className="burger-menu__profile-logo"></div>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
}

export default BurgerMenu;
