import './BurgerMenu.css';
import { Link } from 'react-router-dom';

function BurgerMenu({isOpen}) {
    const burgerButton = `burger-menu__btn ${isOpen ? 'burger-menu__btn_hidden' : 'burger-menu__btn'}`;

    return (
        <>
            <button
                type='button'
                className={burgerButton}
            />
           
        </>
    );
}

export default BurgerMenu;
