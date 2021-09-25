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

  function changeQuantity(id: string, quantity: number) {
    return cart.map((item: IProduct) => {
      if (item.id === id) (item.quantidade as number) += quantity;
      return item;
    });
  }

  function addProduct(newProduct: IProduct) {
    const hasProduct = cart.some((itemCart) => itemCart.id === newProduct.id);
    if (!hasProduct) {
      newProduct.quantidade = 1;
      return setCart([...cart, newProduct]);
    }
    setCart(changeQuantity(newProduct.id, 1));
  }

  function removeProduct(id: string) {
    const product = cart.find((itemCart) => itemCart.id === id);
    const productSingle = product.quantidade === 1;

    if (productSingle) {
      const newCart = cart.filter((item) => item.id !== id);
      return setCart(newCart);
    }
    setCart(changeQuantity(id, -1));
  }

  return { cart, setCart, addProduct, removeProduct };
};
