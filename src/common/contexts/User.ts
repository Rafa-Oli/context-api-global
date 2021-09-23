import { createContext, useState } from 'react';

interface userContextProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
}

export const UserContext = createContext({} as userContextProps);
