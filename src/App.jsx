import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { CartContainer } from './components/CartContainer/CartContainer';
import { ItemListContainer as Home } from './components/ItemListContainer/ItemListContainer';
import { ItemDetialContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { CartContextProvider } from './components/Context/CartContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <Router>
      <CartContextProvider>
        <div className='container'>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home greeting="Bienvenidos a Bikestore" />} />
            <Route path='/category/:cid' element={<Home greeting="Bienvenidos a Bikestore" />} />
            <Route path='/detail/:pid' element={<ItemDetialContainer />} />
            <Route path='/Cart' element={<CartContainer />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
          <Footer />
        </div>
      </CartContextProvider>
    </Router>
  )
}

export default App