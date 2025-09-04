import { createContext, useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useLocalStorage('s11d1', []);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (index) => {
    const filteredCart = cart.filter((_, ind) => {
      return ind !== index;
    });
    setCart(filteredCart);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);