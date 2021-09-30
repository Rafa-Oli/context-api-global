import { IProduct } from 'components/Product/product';
import { useContext, useEffect, useState } from 'react';
import { usePaymentContext } from '../payment/PaymentProvider';
import { UserContext } from '../user/User';
import { CartContext } from './Cart';

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<any[]>([]);
  const [quantityProducts, setQuantityProducts] = useState(0);
  const [valueTotalCart, setValueTotalCart] = useState(0);
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        quantityProducts,
        setQuantityProducts,
        valueTotalCart,
        setValueTotalCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const UseCartContext = () => {
  const {
    cart,
    setCart,
    quantityProducts,
    setQuantityProducts,
    valueTotalCart,
    setValueTotalCart,
  } = useContext(CartContext);

  const { paymentMethod } = usePaymentContext();
  const { setBalance } = useContext(UserContext);

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
    const productSingle = product.quantity === 1;
    if (productSingle) {
      const newCart = cart.filter((item) => item.id !== id);
      return setCart(newCart);
    }
    setCart(changeQuantity(id, -1));
  }

  function makePurchase() {
    setCart([]);
    setBalance((balanceActual) => balanceActual - valueTotalCart);
  }

  useEffect(() => {
    const { newQuantity, newTotal } = cart.reduce(
      (cont, product) => ({
        newQuantity: cont.newQuantity + product.quantity,
        newTotal: cont.newTotal + product.value * product.quantity,
      }),
      {
        newQuantity: 0,
        newTotal: 0,
      }
    );
    setQuantityProducts(newQuantity);
    setValueTotalCart(newTotal * paymentMethod.juros);
  }, [cart, paymentMethod.juros, setQuantityProducts, setValueTotalCart]);

  return {
    cart,
    setCart,
    addProduct,
    removeProduct,
    quantityProducts,
    valueTotalCart,
    makePurchase,
  };
};
