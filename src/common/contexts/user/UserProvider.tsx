import { useState } from 'react';
import { UserContext } from './User';

const UserProvider = ({ children }: any) => {
  const [name, setName] = useState('');
  const [balance, setBalance] = useState(0);
  return (
    <UserContext.Provider value={{ name, setBalance, setName, balance }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
