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

interface DeleteUserInput {
  _id?: string;
}

interface UserContextType {
  users: User[];
  fetchUsers: (query?: number, orcamento?: number) => Promise<void>;
  createUsers: (data: CreateUserInput) => Promise<void>;
  editUsers: (data: EditUserInput) => Promise<void>;
  deleteUsers: (data: DeleteUserInput) => Promise<void>;
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
      setUsers((state) => [...state, response.data.data]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const editUsers = useCallback(async (data: EditUserInput) => {
    const { _id, name, email, phone, cpf } = data;

    try {
      const response = await api.put('/client', {
        _id,
        name,
        email,
        phone,
        cpf,
      });
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const deleteUsers = useCallback(async (data: DeleteUserInput) => {
    try {
      const response = await api.delete('/client', {
        params: {
          _id: data._id,
        },
      });
      setUsers((state) => state.filter((user) => user._id !== data._id));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UsersContext.Provider
      value={{ users, fetchUsers, createUsers, editUsers, deleteUsers }}
    >
      {children}
    </UsersContext.Provider>
  );
}
