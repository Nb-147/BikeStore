import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Footer } from './components/Footer/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Cargando productos..." />
      <Footer />
    </div>
  )
}

export default App