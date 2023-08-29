import './Movies.css';
import { useState, useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoreButton from '../MoreButton/MoreButton';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';


function Movies({ movies, loggedIn, savedMovie, onMovieSave, onMovieDelete }) {
    const [isMoreBtnShown, setIsMoreBtnShown] = useState(true);
    const [isNumberOfMoviesShown, setIsNumberOfMoviesShown] = useState(12);
    const [isNumberToAddMovies, setIsNumberToAddMovies] = useState(3);

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(movies);
    const [isLoading, setIsLoading] = useState(false);
    const [isSearchSuccess, setIsSearchSuccess] = useState(true);

    const handleSearchQueryChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
    };

    const [isChecked, setIsChecked] = useState(false);
    // const [showShortMovies, setShowShortMovies] = useState(searchResults);

    // const FilterShortsMovies = (searchResults) => {
    //     if (isChecked === false) {
    //         setIsChecked(true);
    //         setShowShortMovies(searchResults.filter((movie) => movie.duration <= 40));
    //     } else {
    //         setIsChecked(false);
    //         setShowShortMovies();
    //     }
    // }

    const handleSearch = (results) => {
        setIsLoading(true);
        setIsSearchSuccess(false);
        setTimeout(() => {
            const results = movies.filter((movie) =>
                movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
            );
            // let results = showShortMovies;
            // if (isChecked && showShortMovies) {
            //     results = filteredResults.filter((movie) => movie.duration <= 40);
            // } else {
            //     results = filteredResults;
            // }
            setSearchResults(results);
            setIsSearchSuccess(results.length > 0);
            setIsLoading(false);
        }, 2000);
    };

    // const handleChangeBtn = () => {
    //     if (searchResults.length === length) {
    //         setIsMoreBtnShown(false);
    //     } else {
    //         setIsMoreBtnShown(true);
    //     }
    // };

    const loadMore = () => {
        setIsNumberOfMoviesShown(isNumberOfMoviesShown + isNumberToAddMovies);
        // handleChangeBtn();
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 805) {
                setIsNumberOfMoviesShown(12);
                setIsNumberToAddMovies(3);
            } else if (window.innerWidth > 450 && window.innerWidth <= 805) {
                setIsNumberOfMoviesShown(8);
                setIsNumberToAddMovies(2);
            } else if (window.innerWidth <= 450) {
                setIsNumberOfMoviesShown(5);
                setIsNumberToAddMovies(2);
            }
        };

        handleResize();

        setTimeout(() => {
            window.addEventListener('resize', handleResize);
        }, 2000);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const displayedMovies = searchResults.slice(0, isNumberOfMoviesShown);

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className='movies'>
                <SearchForm onChange={handleSearchQueryChange} searchQuery={searchQuery} handleSearch={handleSearch}
                    isChecked={isChecked} />
                {isLoading ? <Preloader />
                    : isSearchSuccess ? (<div className='movies__main-content'>
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