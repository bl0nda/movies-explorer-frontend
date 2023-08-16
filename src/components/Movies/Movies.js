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
            <section className='movies'>
                <SearchForm />
                <MoviesCardList movies={movies} />
                <MoreButton />
            </section>
            <Footer />
        </>
    )
}
export default Movies;