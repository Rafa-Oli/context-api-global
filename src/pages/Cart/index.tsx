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
import { useContext, useState } from 'react';
import { Container, TotalContainer, PagamentoContainer } from './styles';
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { IProduct } from 'components/Product/product';
import { UseCartContext } from 'common/contexts/cart/CartProvider';
import { PaymentContext } from '../../common/contexts/payment/Payment';
import { usePaymentContext } from 'common/contexts/payment/PaymentProvider';

function Cart() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { cart } = UseCartContext();
  const history = useHistory();

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
          <span>R$ </span>
        </div>
        <div>
          <h2> Saldo: </h2>
          <span> R$ </span>
        </div>
        <div>
          <h2> Saldo Total: </h2>
          <span> R$ </span>
        </div>
      </TotalContainer>
      <Button
        onClick={() => {
          setOpenSnackbar(true);
        }}
        color='primary'
        variant='contained'
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
