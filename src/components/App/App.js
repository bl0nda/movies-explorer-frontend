import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import './App.css';
import { Login } from '../Login/Login';


function App() {
  return (
    <div className="page">
      <div className="page-container">
        {/* <Header />
        <Main /> */}
        <Login />
        <Footer />
      </div>
    </div>
  );
}

export default App;
