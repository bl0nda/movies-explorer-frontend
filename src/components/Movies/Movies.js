import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoreButton from '../MoreButton/MoreButton';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function Movies({ movies }) {
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