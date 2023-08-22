import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoreButton from '../MoreButton/MoreButton';
import { movies } from '../../utils/constants';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function Movies() {
    return (
        <>
            <Header />
            <main className='movies'>
                <SearchForm />
                <MoviesCardList movies={movies} />
                <MoreButton />
            </main>
            <Footer />
        </>
    )
}
export default Movies;