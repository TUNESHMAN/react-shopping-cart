import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import ProductContext from "./Contexts/ProductContext";
import CartContext from "./Contexts/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    // add the given item to the cart
    setCart([...cart, item]);
  };

  const deleteItem = id => {
    //   I deleted the item from cart
    setCart(currentItem => {
      return currentItem.filter(item => item.id !== id);
    });
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={cart, deleteItem}>
          <Navigation cart={cart} />
        </CartContext.Provider>
      </ProductContext.Provider>

      {/* Routes */}
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={cart}>
          <Route exact path="/" component={Products} />
          />
        </CartContext.Provider>
      </ProductContext.Provider>

      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={cart}>
          <Route path="/cart" component={ShoppingCart} />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
