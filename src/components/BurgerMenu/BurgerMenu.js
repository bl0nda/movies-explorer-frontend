import './BurgerMenu.css';

function BurgerMenu({ isOpen, onClick }) {
    const burgerButton = `header__burger-menu-btn ${isOpen ? 'header__burger-menu-btn_close' : 'header__burger-menu-btn'}`;

    return (
        <>
            <button
                type='button'
                className={burgerButton}
                onClick={onClick}
            />
        </>
    );
}

export default BurgerMenu;
