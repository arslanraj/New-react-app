import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
function App() {
  return (
    <>
      <Header/>
       <Routes>

          <Route path='/' element={ <WelcomePage/>}/>
          <Route path='/projects' element={ <Projects/>}/>
          <Route path='/reviews' element={ <Review/>}/>
          <Route path='/contact' element={ <Contact/>}/>
       </Routes>      
      <Footer/>
    </>
  );
}

export default App;
