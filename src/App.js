import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Login from './components/Login';

function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/contact' element= {<Contact />}/>
        <Route path='/about' element= {<About />}/>
        <Route path='/login/:id' element= {<Login />}/>
        <Route path='*' element= {<NotFound />}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
