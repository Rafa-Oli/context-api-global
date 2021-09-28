import { createContext, Dispatch, SetStateAction } from 'react';

export interface TypePayment {
  name: string;
  juros: number;
  id: number;
}

interface PaymentContextProps {
  paymentMethod: TypePayment;
  setPaymentMethod: Dispatch<SetStateAction<TypePayment>>;
  typesPayments: TypePayment[];
}

export const PaymentContext = createContext({} as PaymentContextProps);
PaymentContext.displayName = 'Pagamento';
