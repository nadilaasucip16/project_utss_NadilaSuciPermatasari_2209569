import Header from './components/Header';
import Home from './components/Home';
import About from './components/About'
import Galery from './components/Galery'
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route path= '/' element={<Home/>}/>
          <Route path= '/About' element={<About/>}/>
          <Route path= '/Contact' element={<Contact/>}/>
          <Route path= '/Galery' element={<Galery/>}/>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>

  );
}

export default App;
