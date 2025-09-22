// import { useState } from 'react'
import React, { useState } from "react";
import Login from "./components/login";
import MainHeader from "./components/MainHeader";
import ProductList from "./components/ProductList";
import SingleProduct from "./components/SingleProduct";
import "./style.css";
import "./App.css";
import {
  NavLink,
  Link,
  useNavigate,
  useParams,
  useLocation,
} from "react-router";
import { ThemeProvider } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { state } = useLocation();
  console.log(state);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToList = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log("Adding to cart:", product);
    localStorage.setItem("cartItems", JSON.stringify(cart));
  };

  const handlePlaceOrder = () => {
    setCart([]);
    setSelectedProduct(null);
    setView("list");
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <ThemeToggle>
        <ThemeProvider>
          {!state?.isLoggedIn ? (
            <Login />
          ) : (
            <>
              <MainHeader cartCount={0} />

              <ProductList
                onProductClick={handleProductClick}
                onAddToCart={handleAddToCart}
              />
            </>
          )}
        </ThemeProvider>
      </ThemeToggle>
    </div>
  );

  // return (
  //     <div>
  //             <>
  //                 <ProductList
  //                     onProductClick={handleProductClick}
  //                     onAddToCart={handleAddToCart}
  //                 />
  //             </>

  //     </div>
  // );
}

export default App;
