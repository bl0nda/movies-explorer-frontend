import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

function SavedMovies({
    savedMovies,
    loggedIn,
    onMovieDelete,
    isChecked,
    handleChecked,
    handleSearch,
    searchQuery,
    handleSearchQueryChange,
    searchResults,
    searchStatus }) {

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className='movies'>
                <SearchForm onChange={handleSearchQueryChange} searchQuery={searchQuery} handleSearch={handleSearch}
                    isChecked={isChecked} onCheckboxUpdated={handleChecked} />
                {searchStatus ?
                    <MoviesCardList movies={searchResults} savedMovie={savedMovies} onMovieDelete={onMovieDelete} />
                    : <p className='movies__not-found'>Ничего не найдено</p>
                }

            </main>
            <Footer />
        </>
    )
}
export default SavedMovies;