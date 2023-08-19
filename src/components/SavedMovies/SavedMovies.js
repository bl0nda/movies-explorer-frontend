import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { movies } from '../../utils/constants';

function Movies() {
    return (
        <>
            <Header />
            <section className='movies'>
                <SearchForm />
                <MoviesCardList movies={movies.filter((movie) => movie.saved === true)} />
            </section>
            <Footer />
        </>
    )
}
export default Movies;