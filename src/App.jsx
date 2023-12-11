import { useState } from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { CartContainer } from './components/CartContainer/CartContainer';
import { ItemListContainer as Home } from './components/ItemListContainer/ItemListContainer';
import { ItemDetialContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Login } from './components/Login/Login';
import { CartContextProvider } from './components/Context/CartContext';
import { AddProduct } from './components/AddProduct/AddProduct';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  const [loggedInUserName, setLoggedInUserName] = useState(null);
  const handleLogin = (name) => {
    setLoggedInUserName(name);
  };

  return (
    <Router>
      <CartContextProvider>
        <div className='container'>
          <NavBar isLoggedIn={loggedInUserName !== null} userName={loggedInUserName} />
          <Routes>
            <Route path='/' element={<Home greeting="Bienvenidos a Bikestore" />} />
            <Route path='/category/:cid' element={<Home greeting="Bienvenidos a Bikestore" />} />
            <Route path='/detail/:pid' element={<ItemDetialContainer />} />
            <Route path='/cart' element={<CartContainer />} />
            <Route path='/login' element={<Login onLogin={handleLogin} />} />
            <Route path='/addProduct' element={<AddProduct />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
          <Footer />
        </div>
      </CartContextProvider>
    </Router>
  );
}

export default App;