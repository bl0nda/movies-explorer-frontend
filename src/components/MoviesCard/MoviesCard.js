import { useLocation } from "react-router-dom";
import './MoviesCard.css';

function MoviesCard(props) {
    const location = useLocation();

    return (
        <div className='movie'>
            <div className='movie__header'>
                <div className='movie__description'>
                    <h2 className='movie__title'>{props.movie.nameRU}</h2>
                    <p className='movie__duration'>{props.movie.duration}</p>
                </div>
                <button type="button"
                    className={location.pathname === "/movies"
                    ? "movie__button movie__button_type_save"
                    : "movie__button movie__button_type_delete"}
                    >
                </button>
            </div>
            <img className='movie__thumbnail' alt="постер фильма" src={props.movie.thumbnail} />
        </div>
    );
}

export default MoviesCard;