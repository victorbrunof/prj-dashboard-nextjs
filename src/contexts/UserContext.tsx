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

interface CreateUserInput {
  name: string;
  email: string;
  phone: string;
  cpf: string;
}

interface EditUserInput {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
}

interface UserContextType {
  users: User[];
  fetchUsers: (query?: number, orcamento?: number) => Promise<void>;
  createUsers: (data: CreateUserInput) => Promise<void>;
  editUsers: (data: EditUserInput) => Promise<void>;
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

  const createUsers = useCallback(async (data: CreateUserInput) => {
    const { name, email, phone, cpf } = data;
    try {
      const response = await api.post('/client', {
        name,
        email,
        phone,
        cpf,
      });
      setUsers([...users, response.data.data]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const editUsers = useCallback(async (data: EditUserInput) => {
    const { _id, name, email, phone, cpf } = data;

    try {
      const response = await api.put('/client', {
        params: {
          _id,
        },
        name,
        email,
        phone,
        cpf,
      });
      console.log(response.data.data);
      setUsers((state) =>
        state.map((user) => (user._id === _id ? response.data.data : user))
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UsersContext.Provider
      value={{ users, fetchUsers, createUsers, editUsers }}
    >
      {children}
    </UsersContext.Provider>
  );
}
