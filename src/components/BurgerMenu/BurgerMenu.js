import './BurgerMenu.css';

function BurgerMenu({isOpen, onClick, onClose}) {
    const burgerButton = `burger-menu__btn ${isOpen ? 'burger-menu__btn_close' : 'burger-menu__btn'}`;

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
