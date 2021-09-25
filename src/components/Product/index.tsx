import { Container } from './styles';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { IProduct } from './product';
import { UserCartContext } from 'common/contexts/CartProvider';

function Product({ name, photo, id, value, unidade }: IProduct) {
  const { cart, addProduct, removeProduct } = UserCartContext();
  const productInCart = cart.find((item) => item.id === id);

  return (
    <Container>
      <div>
        <img src={`/assets/${photo}.png`} alt={`foto de ${name}`} />
        <p>
          {name} - R$ {value?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton color='secondary' onClick={() => removeProduct(id)}>
          <RemoveIcon />
        </IconButton>
        {productInCart?.quantidade || 0}
        <IconButton
          color='primary'
          onClick={() => addProduct({ name, photo, id, value })}
        >
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  );
}

export default Product;
