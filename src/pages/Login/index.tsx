import { Button } from "@material-ui/core";
import { Container, Titulo, InputContainer } from "./styles";
import { Input, InputLabel, InputAdornment } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../common/contexts/User";

function Login({ name, setName, balance, setBalance }) {
  const history = useHistory();
  return (
    <Container>
      <UserContext.Consumer>
        {({ name, setBalance, setName, balance }) => (
          <>
            <Titulo>Insira o seu nome</Titulo>
            <InputContainer>
              <InputLabel>Nome</InputLabel>
              <Input
                value={name}
                onChange={(event) => setName(event.target.value)}
                type="text"
              />
            </InputContainer>
            <InputContainer>
              <InputLabel>Saldo</InputLabel>
              <Input
                type="number"
                value={balance}
                onChange={(event) => setBalance(event.target.value)}
                startAdornment={
                  <InputAdornment position="start">R$</InputAdornment>
                }
              />
            </InputContainer>
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push("/fair")}
            >
              Avançar
            </Button>{" "}
          </>
        )}
      </UserContext.Consumer>
    </Container>
  );
}

export default Login;
