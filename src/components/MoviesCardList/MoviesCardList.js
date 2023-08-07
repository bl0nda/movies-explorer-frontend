import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies }) {
    return (
        <section className='movies-card-list'>
            <div className='movies-card-list__container'>
                {movies.map((movie) =>
                    <MoviesCard key={movie.movieId} />)}
            </div>
            <button type='button' className='movies-card-list__btn'>Ещё</button>
        </section>
    );
}

export default MoviesCardList;