import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import './App.css';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { Profile } from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Page404 from '../Page404/Page404';
import Preloader from '../Preloader/Preloader';


function App() {
  return (
    <div className="page">
        <Header />
        <Main />
        {/* <Login />  */}
        {/* <Register /> */}
        {/* <Profile /> */}
        {/* <Page404 /> */}
        {/* <Movies /> */}
        {/* <SavedMovies /> */}
        {/* <Preloader /> */}
        {/* <Footer /> */}
    </div>
  );
}

export default App;
