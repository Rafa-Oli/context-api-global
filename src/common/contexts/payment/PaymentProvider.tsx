import { PaymentContext, TypePayment } from './Payment';
import { useContext, useState } from 'react';

export const PaymentProvider = ({ children }: any) => {
  const typesPayments = [
    { name: 'Boleto', juros: 1, id: 1 },
    { name: 'Cartão de crédito', juros: 1.3, id: 2 },
    { name: 'PIX', juros: 1, id: 3 },
    { name: 'Crediário', juros: 1.5, id: 4 },
  ];

  const [paymentMethod, setPaymentMethod] = useState(typesPayments[0]);

  return (
    <PaymentContext.Provider
      value={{ paymentMethod, typesPayments, setPaymentMethod }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePaymentContext = () => {
  const { typesPayments, paymentMethod, setPaymentMethod } =
    useContext(PaymentContext);

  function changeMethodPayment(id: number) {
    const paymentActual = typesPayments.find((payment) => payment.id === id);

    setPaymentMethod(paymentActual as TypePayment);
  }

  return {
    typesPayments,
    paymentMethod,
    changeMethodPayment,
  };
};
