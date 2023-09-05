import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, savedMovie, onMovieSave, onMovieDelete }) {
    return (
        <section className='movies-card-list'>
            <div className='movies-card-list__container'>
                {movies.map((movie) =>
                    <MoviesCard key={movie.id || movie._id} movie={movie} savedMovie={savedMovie} onMovieSave={onMovieSave} onMovieDelete={onMovieDelete} />)}
            </div>
        </section>
    );
}

export default MoviesCardList;