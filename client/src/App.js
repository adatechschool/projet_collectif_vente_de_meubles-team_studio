import './App.css';
import DisplayCards from './components/DisplayCards';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import {Home} from './pages/Home';
import Fetching from './components/Fetching';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner />
      {/* <a href="/home">click maison</a> */}
      <>
      <Routes>
        {/* <Route path='/home' element={<Home/>}/> */}
      </Routes>
      </> 
      <DisplayCards/>
      <Fetching/>
      <Footer/>
    </div>
  );
}

export default App;
