import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import {Home} from './pages/Home';
import {Login} from './pages/Login';
import {Informations} from './pages/Informations'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner />
      <>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/informations' element={<Informations/>}/>
      </Routes>
      </> 
    </div>
  );
}

export default App;
