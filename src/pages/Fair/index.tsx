import { Container, Header, Lista } from './styles';
import feira from './fair.json';
import NavBar from './NavBar';
import React, { useContext } from 'react';
import Product from '../../components/Product';
import { UserContext } from 'common/contexts/User';

function Feira() {
  const { name, balance } = useContext(UserContext);
  return (
    <Container>
      <NavBar />
      <Header>
        <div>
          <h2> Olá {name}!</h2>
          <h3> Saldo: R$ {balance}</h3>
        </div>
        <p>Encontre os melhores produtos orgânicos!</p>
      </Header>
      <Lista>
        <h2>Produtos:</h2>
        {feira.map((produto) => (
          <Product unity={undefined} {...produto} key={produto.id} />
        ))}
      </Lista>
    </Container>
  );
}

export default Feira;
