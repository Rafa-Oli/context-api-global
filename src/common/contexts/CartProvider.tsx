import { IProduct } from 'components/Product/product';
import { useContext, useState } from 'react';
import { CartContext } from './Cart';

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<any[]>([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const UserCartContext = () => {
  const { cart, setCart } = useContext(CartContext);

  function addProduct(newProduct: IProduct) {
    const hasProduct = cart.some((itemCart) => itemCart.id === newProduct.id);
    if (!hasProduct) {
      newProduct.quantidade = 1;
      return setCart([...cart, newProduct]);
    }
    setCart(
      cart.map((item: IProduct) => {
        if (item.id === newProduct.id) (item.quantidade as number) += 1;
        return item;
      })
    );
  }
  return { cart, setCart, addProduct };
};
