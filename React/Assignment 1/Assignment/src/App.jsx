import { useState } from 'react'
import { Route, Routes} from 'react-router'
import Products from './pages/Products'
import Product from './pages/Product'
import SearchProduct from './pages/SearchProduct'
import './App.css'
import Landingpage from './pages/Landingpage'
import Auth from './authpage/Auth'
import Register from './authpage/register/Register'
import Login from './authpage/login/Login'

function App() {

  return (
    <>
    <Routes>
      <Route path={"/"} element={<Landingpage/>}></Route>
      <Route path={"/Products/"} element={<Products />}></Route>
      <Route path={"/item/:id"} element={<Product />}></Route>
      <Route path={"/SearchProduct/"} element={<SearchProduct />}></Route>
      <Route path={"/Auth/"} element={<Auth />}>

        <Route path={"Register"} element={<Register />}></Route>
        <Route path={"Login"} element={<Login />}></Route>



      </Route>
      

    </Routes>
    </>
  )
}

export default App
