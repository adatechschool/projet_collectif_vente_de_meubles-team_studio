import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import {Home} from './pages/Home';
import DisplayCards from './components/DisplayCards';

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
    </div>
  );
}

export default App;
