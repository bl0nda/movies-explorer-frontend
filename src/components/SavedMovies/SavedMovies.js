import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies({movies, loggedIn}) {
    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className='movies'>
                <SearchForm />
                <MoviesCardList movies={movies.filter((movie) => movie.saved === true)} />
            </main>
            <Footer />
        </>
    )
}
export default SavedMovies;