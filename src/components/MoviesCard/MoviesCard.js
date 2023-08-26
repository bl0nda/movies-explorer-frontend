import { NavLink, useLocation } from "react-router-dom";
import './MoviesCard.css';

function MoviesCard(props) {
    const location = useLocation();
    const movieDuration = (min) => {
        const m = min % 60;
        const h = Math.floor(min / 60);
        const duration = `${h > 0 ? h + "ч" : ""} ${m > 0 ? m + "м" : ""}`;
        return duration.trim();
    };
    const cardVisibile = `movie ${props.isMovieShown ? 'movie' : 'movie_hidden'}`;

function activeMovieLike() {
    
}

    return (
        <div className='movie'>
            <div className='movie__header'>
                <div className='movie__description'>
                    <h2 className='movie__title'>{props.movie.nameRU}</h2>
                    <p className='movie__duration'>{movieDuration(props.movie.duration)}</p>
                </div>
                {location.pathname === "/movies" &&
                    <button type="button"
                        className="movie__button movie__button_type_save">
                    </button>}
                {location.pathname === "/saved-movies" &&
                    <button type="button"
                        className="movie__button movie__button_type_delete">
                    </button>}
            </div>
            <NavLink to={props.movie.trailerLink.replace('https:', '')} target='_blank' className="movie__treiler">
                <img className='movie__thumbnail' alt="постер фильма" src={`https://api.nomoreparties.co${props.movie.image.url}`} />
            </NavLink>
        </div>
    );
}

export default MoviesCard;