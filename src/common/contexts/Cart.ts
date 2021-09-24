import { createContext, SetStateAction } from 'react';

interface cartContextProps {
  cart: any[];
  setCart: React.Dispatch<SetStateAction<any[]>>;
}

export const CartContext = createContext({} as cartContextProps);
CartContext.displayName = 'Cart';
