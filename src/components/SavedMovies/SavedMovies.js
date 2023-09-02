import { useState, useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies({
    savedMovies,
    loggedIn,
    onMovieDelete,
    isChecked,
    handleChecked,
    handleSearch,
    searchQuery,
    handleSearchQueryChange,
    searchDone,
    searchResults }) {

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className='movies'>
                <SearchForm onChange={handleSearchQueryChange} searchQuery={searchQuery} handleSearch={handleSearch}
                    isChecked={isChecked} onCheckboxUpdated={handleChecked} />
                {!searchDone ? (
                    <>
                        <MoviesCardList movies={savedMovies} savedMovie={savedMovies} onMovieDelete={onMovieDelete} />
                    </>
                ) : (
                    <>
                        <MoviesCardList movies={searchResults} savedMovie={savedMovies} onMovieDelete={onMovieDelete} />
                    </>
                )
                }
            </main>
            <Footer />
        </>
    )
}
export default SavedMovies;