import { useState } from 'react'
import { Route, Routes} from 'react-router'
import Products from './pages/Products'
import Product from './pages/Product'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Products />}></Route>
      <Route path="/item/:id" element={<Product />}></Route>
    </Routes>
    </>
  )
}

export default App
