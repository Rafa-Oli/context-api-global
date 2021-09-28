import { createContext, SetStateAction } from 'react';

interface cartContextProps {
  cart: any[];
  setCart: React.Dispatch<SetStateAction<any[]>>;
  quantityProducts: number;
  setQuantityProducts: React.Dispatch<SetStateAction<number>>;
  valueTotalCart: number;
  setValueTotalCart: React.Dispatch<SetStateAction<number>>;
}

export const CartContext = createContext({} as cartContextProps);
CartContext.displayName = 'Cart';
