import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {movies} from '../../utils/constants';

function Movies () {
    return (
        <section className='movies'>
            {/* <SearchForm /> */}
            <MoviesCardList movies={movies}/>
        </section>
    )
}
export default Movies;