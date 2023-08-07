import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import './MoviesCard.css';

function MoviesCard(movie, onCardLike) {
    const currentUser = useContext(CurrentUserContext);
    const isLiked = movie.likes.some((i) => i._id === currentUser._id);
    const movieSaveButtonClassName = `movie__save-button ${isLiked && "movie__like-button_active"
        }`;

    function handleLikeClick() {
        onCardLike(movie);
    }

    return (
        <div className='movie'>
            <div className='movie__header'>
                <div className='movie__description'>
                    <h2 className='movie__title'>{movie.nameRu}</h2>
                    <p className='movie__duration'>{movie.duration}</p>
                </div>
                <button type="button"
                    className={movieSaveButtonClassName}
                    onClick={handleLikeClick}></button>
            </div>
            <img className='movie__thumbnail' alt={movie.nameRU} src={movie.thumbnail} />
        </div>
    );
}

export default MoviesCard;