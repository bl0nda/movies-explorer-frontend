import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies({savedMovies, loggedIn, onMovieDelete}) {
    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className='movies'>
                <SearchForm />
                <MoviesCardList movies={savedMovies} savedMovie={savedMovies} onMovieDelete={onMovieDelete} />
            </main>
            <Footer />
        </>
    )
}
export default SavedMovies;