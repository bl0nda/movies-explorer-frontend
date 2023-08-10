import { useLocation } from "react-router-dom";
import './MoviesCard.css';

function MoviesCard(props, onCardLike) {
    const location = useLocation();

    function handleLikeClick() {
        onCardLike(props.movie);
    }

    return (
        <div className='movie'>
            <div className='movie__header'>
                <div className='movie__description'>
                    <h2 className='movie__title'>{props.movie.nameRU}</h2>
                    <p className='movie__duration'>{props.movie.duration}</p>
                </div>
                <button type="button"
                    className={location.pathname === "/movies"
                    ? "movie__save-button movie__save-button_active"
                    : "movie__save-button movie__save-button_inactive"}
                    onClick={handleLikeClick}>
                </button>
            </div>
            <img className='movie__thumbnail' alt={props.movie.nameRU} src={props.movie.thumbnail} />
        </div>
    );
}

export default MoviesCard;