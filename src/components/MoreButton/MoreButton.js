import './MoreButton.css';

function MoreButton({ isShown, loadMore }) {
    const moreBtnShown = `more-button ${isShown ? 'more-button' : 'more-button_hidden'}`;

    return (
        <button
            type='button'
            onClick={loadMore}
            className={moreBtnShown}>
            Ещё
        </button>
    );
}

export default MoreButton;