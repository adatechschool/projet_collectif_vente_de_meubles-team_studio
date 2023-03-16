import './App.css';
import DisplayCards from './components/DisplayCards';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import {Home} from './pages/Home';
import Fetching from './components/Fetching';

function App() {
  return (
    <div>
      <Navbar/>
      <Footer/>
      <Banner />
      {/* <a href="/home">click maison</a> */}
      <>
      <Routes>
        {/* <Route path='/home' element={<Home/>}/> */}
      </Routes>
      </> 
      <DisplayCards/>
      <Fetching/>
    </div>
  );
}

export default App;
