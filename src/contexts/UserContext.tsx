import { ReactNode, useCallback, useEffect, useState } from 'react';
import { createContext } from 'use-context-selector';
import { api } from '../services/api';

interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  createdAt: string;
  //   updatedAt: string;
}

interface UserContextType {
  users: User[];
  fetchUsers: (query?: number, orcamento?: number) => Promise<void>;
}

interface UsersProviderProps {
  children: ReactNode;
}

export const UsersContext = createContext({} as UserContextType);

export function UsersProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await api.get('/client');

      setUsers(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UsersContext.Provider value={{ users, fetchUsers }}>
      {children}
    </UsersContext.Provider>
  );
}
