import { Nav } from './styles';
// import { ReactComponent as Logo } from 'assets/logo';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { UseCartContext } from 'common/contexts/CartProvider';
import { useHistory } from 'react-router-dom';

export default function NavBar() {
  const { quantityProducts } = UseCartContext();
  const history = useHistory();
  return (
    <Nav>
      {/* <Logo /> */}
      <IconButton
        disabled={quantityProducts === 0}
        onClick={() => history.push('/cart')}
      >
        <Badge color='primary' badgeContent={quantityProducts}>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  );
}
