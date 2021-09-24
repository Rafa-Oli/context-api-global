import { Container } from './styles';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useContext } from 'react';
import { CartContext } from 'common/contexts/Cart';

interface Product {
  name: string;
  photo: string;
  quantidade?: number;
  value: number;
  id: number;
  unidade?: number;
}

function Product({ name, photo, id, value, unidade }: Product) {
  const { cart, setCart } = useContext(CartContext);

  function addProduct(newProduct: Product) {
    const hasProduct = cart.some((itemCart) => itemCart.id === newProduct.id);
    if (!hasProduct) {
      newProduct.quantidade = 1;
      return setCart([...cart, newProduct]);
    }
    setCart(
      cart.map((item: any) => {
        if (item.id === newProduct.id) item.quantidade += 1;
        return item;
      })
    );
  }
  return (
    <Container>
      <div>
        <img src={`/assets/${photo}.png`} alt={`foto de ${name}`} />
        <p>
          {name} - R$ {value?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton color='secondary'>
          <RemoveIcon />
        </IconButton>
        <IconButton onClick={() => addProduct({ name, photo, id, value })}>
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  );
}

export default Product;
