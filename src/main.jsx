import { StrictMode, React, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Counter.jsx'
import Todo from './Todo.jsx'
import ProductList from './components/ProductList.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import SingleProduct from './components/SingleProduct.jsx'
import Checkout from './components/Checkout.jsx'
import MainHeader from './components/MainHeader.jsx'
import Login from './components/login.jsx'
import { ThemeProvider } from '../ThemeContext.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <Login/> */}
    
    <Routes>
      <ThemeProvider>
      <Route path="/" element={<App />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/checkout" element={<Checkout />} />
      </ThemeProvider>
    </Routes>
  </BrowserRouter>
)
