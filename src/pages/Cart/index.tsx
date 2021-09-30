import {
  Button,
  Snackbar,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import MuiAlert from '@material-ui/lab/Alert';
import Product from 'components/Product';
import { useContext, useMemo, useState } from 'react';
import { Container, TotalContainer, PagamentoContainer } from './styles';
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { IProduct } from 'components/Product/product';
import { UseCartContext } from 'common/contexts/cart/CartProvider';
import { usePaymentContext } from 'common/contexts/payment/PaymentProvider';
import { UserContext } from 'common/contexts/user/User';

function Cart() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { cart, valueTotalCart, makePurchase } = UseCartContext();
  const { balance = 0 } = useContext(UserContext);
  const history = useHistory();
  const total = useMemo(
    () => balance - valueTotalCart,
    [balance, valueTotalCart]
  );

  const { paymentMethod, typesPayments, changeMethodPayment } =
    usePaymentContext();

  return (
    <Container>
      <div>
        <IconButton color='primary' onClick={() => history.goBack()}>
          <ArrowBack />
        </IconButton>
      </div>
      <h2>Carrinho</h2>
      {cart.map((product: IProduct) => (
        <Product {...product} key={product.id} />
      ))}
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
        <Select
          value={paymentMethod.id}
          onChange={(event: any) => changeMethodPayment(event.target.value)}
        >
          {typesPayments.map((payment) => (
            <MenuItem value={payment.id} key={payment.id}>
              {payment.name}
            </MenuItem>
          ))}
        </Select>
      </PagamentoContainer>
      <TotalContainer>
        <div>
          <h2>Total no Carrinho: </h2>
          <span>R$ {valueTotalCart.toFixed(2)}</span>
        </div>
        <div>
          <h2> Saldo: </h2>
          <span> R$ {Number(balance).toFixed(2)}</span>
        </div>
        <div>
          <h2> Saldo Total: </h2>
          <span> R$ {total.toFixed(2)}</span>
        </div>
      </TotalContainer>
      <Button
        onClick={() => {
          makePurchase();
          setOpenSnackbar(true);
        }}
        color='primary'
        variant='contained'
        disabled={total < 0 || cart.length === 0}
      >
        Comprar
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
      >
        <MuiAlert onClose={() => setOpenSnackbar(false)} severity='success'>
          Compra feita com sucesso!
        </MuiAlert>
      </Snackbar>
    </Container>
  );
}

export default Cart;
