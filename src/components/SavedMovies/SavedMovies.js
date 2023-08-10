import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import {movies} from '../../utils/constants';

function Movies () {
    return (
        <section className='movies'>
            <SearchForm />
            <MoviesCardList movies={movies.filter((movie) => movie.saved === true)} />
        </section>
    )
}
export default Movies;