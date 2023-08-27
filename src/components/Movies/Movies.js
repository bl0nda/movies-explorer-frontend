import './Movies.css';
import { useState, useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoreButton from '../MoreButton/MoreButton';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';


function Movies({ movies, loggedIn }) {
    const [isMoreBtnShown, setIsMoreBtnShown] = useState(true);
    const [isNumberOfMoviesShown, setIsNumberOfMoviesShown] = useState(12);
    const [rowCount, setRowCount] = useState(4);
    const [isLoading, setIsLoading] = useState(false);
    const [isSearchSuccess, setIsSearchSuccess] = useState(true);

    const loadMore = () => {
        setRowCount(rowCount + 1);
    };

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(movies);

    const handleSearchQueryChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
    };

    const handleSearch = () => {
        setIsLoading(true);
        setIsSearchSuccess(false);
        setTimeout(() => {
            const results = movies.filter((movie) =>
                movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(results);
            setIsSearchSuccess(results.length > 0);
            setIsLoading(false);
        }, 2000);
    };

    useEffect(() => {
        if (window.innerWidth > 805) { setIsNumberOfMoviesShown(12); setRowCount(4); }
        else if (window.innerWidth > 450 && window.innerWidth <= 805) { setIsNumberOfMoviesShown(8); setRowCount(4); }
        else if (window.innerWidth <= 450) { setIsNumberOfMoviesShown(5); setRowCount(5); }
    }, []);


    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className='movies'>
                <SearchForm onChange={handleSearchQueryChange} searchQuery={searchQuery} handleSearch={handleSearch} />
                {isLoading ? <Preloader />
                    : isSearchSuccess ? (<div className='movies__main-content'>
                        <MoviesCardList movies={searchResults} />
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

// function showMovies() {
//     btn.addEventListener('click', () => {
//         movies.forEach(movie => movie.classList.remove('hidden'));
//         btn.classList.add('hidden');
//     })
// }

// function responce1(btn) {
//     if (window.innerWidth > 805) {
//         btn.classList.add('hidden');

//         movies.forEach((movie, index) => {
//             movie.classList.add('hidden')
//             if (index <= 3) {
//                 movie.classList.remove('hidden')
//             } else if (index > 3) {
//                 btn.classList.remove('hidden');
//             }
//             showMovies()
//         })
//     }
// }

// responce1();