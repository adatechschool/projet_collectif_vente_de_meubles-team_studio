import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import {Home} from './pages/Home';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner />
      <a href="/home">click maison</a>
      <>
      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </> 
    </div>
  );
}

export default App;
