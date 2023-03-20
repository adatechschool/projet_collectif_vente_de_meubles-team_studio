import './App.css';
import DisplayCards from './components/DisplayCards';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import {Login} from './pages/Login';
import {Cart} from './pages/Cart';
import {Informations} from './pages/Informations'
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar/>
      <Cart/>
      <Banner />
      <>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/informations' element={<Informations/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </> 
      <DisplayCards/>
      <Footer/>
      
    </div>
  );
}

export default App;
