import { useState } from 'react';
import { CartContext } from './Cart';

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
