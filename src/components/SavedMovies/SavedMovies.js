import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { movies } from '../../utils/constants';

function Movies() {
    return (
        <>
            <Header />
            <main className='movies'>
                <SearchForm />
                <MoviesCardList movies={movies.filter((movie) => movie.saved === true)} />
            </main>
            <Footer />
        </>
    )
}
export default Movies;