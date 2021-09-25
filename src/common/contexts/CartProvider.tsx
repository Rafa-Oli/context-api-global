import { IProduct } from 'components/Product/product';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from './Cart';

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<any[]>([]);
  const [quantityProducts, setQuantityProducts] = useState(0);
  return (
    <CartContext.Provider
      value={{ cart, setCart, quantityProducts, setQuantityProducts }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const UseCartContext = () => {
  const { cart, setCart, quantityProducts, setQuantityProducts } =
    useContext(CartContext);

  function changeQuantity(id: string, quantity: number) {
    return cart.map((item: IProduct) => {
      if (item.id === id) (item.quantity as number) += quantity;
      return item;
    });
  }

  function addProduct(newProduct: IProduct) {
    const hasProduct = cart.some((itemCart) => itemCart.id === newProduct.id);
    if (!hasProduct) {
      newProduct.quantity = 1;
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

  useEffect(() => {
    const newQuantity = cart.reduce(
      (cont, product) => cont + product.quantity,
      0
    );
    setQuantityProducts(newQuantity);
  }, [cart, setQuantityProducts]);

  return { cart, setCart, addProduct, removeProduct, quantityProducts };
};
