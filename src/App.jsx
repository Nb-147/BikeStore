import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './assets/components/NavBar/NavBar';
import { ItemListContainer } from './assets/components/ItemListContainer/ItemListContainer';
import { Footer } from './assets/components/Footer/Footer';


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