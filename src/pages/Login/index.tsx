import { Button } from '@material-ui/core';
import { Container, Titulo, InputContainer } from './styles';
import { Input, InputLabel, InputAdornment } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../common/contexts/User';
import { useContext } from 'react';

function Login() {
  const history = useHistory();
  const { name, setName, balance, setBalance } = useContext(UserContext);
  return (
    <Container>
      <Titulo>Insira o seu nome</Titulo>
      <InputContainer>
        <InputLabel>Nome</InputLabel>
        <Input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type='text'
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Saldo</InputLabel>
        <Input
          type='number'
          value={balance}
          onChange={(event: any) => setBalance(event.target.value as number)}
          startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
        />
      </InputContainer>
      <Button
        variant='contained'
        color='primary'
        disabled={name.length < 3}
        onClick={() => history.push('/fair')}
      >
        Avançar
      </Button>{' '}
    </Container>
  );
}

export default Login;
