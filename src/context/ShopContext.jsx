import React, { useState } from "react";
import { createContext } from "react";
import all_products from "../assets/all_products";
import CartItem from "../components/CartItem";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const user = localStorage.getItem("user")
  let cart = {};
  for (let index = 0; index < all_products.length; index++) {
    // const element = cart[index];
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeCart = (itemId) => {
    const isRemove = window.confirm("Would you like remove product?")
    if (!isRemove) return 
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfor = all_products.find((e) => e.id === Number(item));
        totalAmount += itemInfor.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    all_products,
    cartItems,
    addToCart,
    removeCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
