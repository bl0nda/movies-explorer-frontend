import './Movies.css';
// import { useState, useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoreButton from '../MoreButton/MoreButton';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';


function Movies({
    displayedMovies,
    loggedIn,
    savedMovie,
    onMovieSave,
    onMovieDelete,
    isLoading,
    handleSearch,
    searchQuery,
    searchStatus,
    handleSearchQueryChange,
    isChecked,
    handleChecked,
    isMoreBtnShown,
    loadMore,
}) {


    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className='movies'>
                <SearchForm onChange={handleSearchQueryChange} searchQuery={searchQuery} handleSearch={handleSearch}
                    isChecked={isChecked} onCheckboxUpdated={handleChecked} />
                {isLoading ? <Preloader />
                    : searchStatus ? (<div className='movies__main-content'>
                        <MoviesCardList movies={displayedMovies} savedMovie={savedMovie} onMovieSave={onMovieSave} onMovieDelete={onMovieDelete} />
                        <MoreButton isShown={isMoreBtnShown} loadMore={loadMore} />
                    </div>
                    ) : <p className='movies__not-found'>Ничего не найдено</p>
                }
            </main>
            <Footer />
        </>
    )
}
export default Movies;