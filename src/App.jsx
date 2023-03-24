//import { useState } from 'react'
import Navbar from './assets/composant/Navbar';
import Section from './assets/composant/Section';
import Produits from './assets/composant/Produits';
import Cart from './assets/composant/Cart';
import './App.css'

function App() {
  //const [produits, setProduits] = useState([]);

  return (
    <><div className='navbar'>
      <Navbar />
      <Section/>
      <Produits/>
      <Cart/>
    </div>
    
    </>
  )
}

export default App
