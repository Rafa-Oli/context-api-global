import { Nav } from './styles';
// import { ReactComponent as Logo } from 'assets/logo';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { UseCartContext } from 'common/contexts/CartProvider';

export default function NavBar() {
  const { quantityProducts } = UseCartContext();
  return (
    <Nav>
      {/* <Logo /> */}
      <IconButton disabled={quantityProducts === 0}>
        <Badge color='primary' badgeContent={quantityProducts}>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  );
}
