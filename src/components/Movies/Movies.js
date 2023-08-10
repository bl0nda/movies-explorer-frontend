import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoreButton from '../MoreButton/MoreButton';
import {movies} from '../../utils/constants';

function Movies () {
    return (
        <section className='movies'>
            <SearchForm />
            <MoviesCardList movies={movies}/>
            <MoreButton />
        </section>
    )
}
export default Movies;