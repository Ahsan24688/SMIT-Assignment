import { useState } from 'react'
import { Route, Routes} from 'react-router'
import Products from './pages/Products'
import Product from './pages/Product'
import SearchProduct from './pages/SearchProduct'
import './App.css'
import Landingpage from './pages/Landingpage'

function App() {

  return (
    <>
    <Routes>
      <Route path={"/"} element={<Landingpage/>}></Route>
      <Route path={"/Products/"} element={<Products />}></Route>
      <Route path={"/item/:id"} element={<Product />}></Route>
      <Route path={"/SearchProduct/"} element={<SearchProduct />}></Route>
    </Routes>
    </>
  )
}

export default App
