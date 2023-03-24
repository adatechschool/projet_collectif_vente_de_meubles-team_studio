import "./App.css";
// import DisplayCards from './components/DisplayCards';
import { Routes, Route } from 'react-router-dom';
import {Navbar} from './components/Header';
import { Login } from './pages/Login';
import { Contact } from './pages/Contact';
// import Fetching from './components/Fetching';
import { Cart } from './pages/Cart';
import { Informations } from './pages/Informations'
import {Footer} from './components/Footer';
import { Home } from './pages/Home';
import { Registration } from "./pages/Registration";
import { UserContextProvider } from "./components/UserContext";
import Account from "./pages/Account";


function App() {
  return (
    <div>

      

      <UserContextProvider>
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/informations/:id" element={<Informations />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </div>
  );
}

export default App;
