import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Main />
      <Footer />
      
    </>
  );
}

export default App;
