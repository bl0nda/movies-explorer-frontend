import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import './App.css';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { Profile } from '../Profile/Profile';
import Movies from '../Movies/Movies';
import Page404 from '../Page404/Page404';


function App() {
  return (
    <div className="page">
        {/* <Header /> */}
        {/* <Main /> */}
        {/* <Login /> 
        <Register /> */}
        {/* <Profile /> */}
        {/* <Footer /> */}
        {/* <Page404 /> */}
        <Movies />
    </div>
  );
}

export default App;
