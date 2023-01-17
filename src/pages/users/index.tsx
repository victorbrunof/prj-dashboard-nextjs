import {
  Box,
  Flex,
  Heading,
  Text,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Container } from '../../components/Container';
import { Pagination } from '../../components/Pagination';
import { api } from '../../services/api';
import ModalCrudUser from './modalCrudUser';

interface User {
  _id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  createdAt: string;
}

export default function Users() {
  const [pagination, setPagination] = useState(1);
  const [totalData, setTotalData] = useState(10);
  const [users, setUsers] = useState<User[]>([]);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  async function fetchUsers() {
    const response = await api.get('/client');

    setUsers(response.data.data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Head>
        <title>List Users</title>
        <meta name="description" content="Realizar Login" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Container>
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <ModalCrudUser />
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de criação</Th>}
                {isWideVersion && <Th>Telefone</Th>}
                {isWideVersion && <Th>CPF</Th>}
                <Th w="8"></Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => {
                return (
                  <Tr key={user._id}>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">{user.name}</Text>
                        {isWideVersion && (
                          <Text fontSize="sm" color="gray.300">
                            {user.email}
                          </Text>
                        )}
                      </Box>
                    </Td>
                    {isWideVersion && (
                      <Td>
                        <Text fontWeight="bold">{user.createdAt}</Text>
                      </Td>
                    )}
                    {isWideVersion && (
                      <Td>
                        <Text fontWeight="bold">{user.phone}</Text>
                      </Td>
                    )}
                    {isWideVersion && (
                      <Td>
                        <Text fontWeight="bold">{user.cpf}</Text>
                      </Td>
                    )}
                    <Td>
                      <ModalCrudUser
                        edit={'edit'}
                        id={user._id}
                        name={user.name}
                        email={user.email}
                        phone={user.phone}
                        cpf={user.cpf}
                        setUsers={setUsers}
                      />
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>

          <Pagination
            setPagination={setPagination}
            pagination={pagination}
            setTotalData={setTotalData}
            totalData={totalData}
          />
        </Box>
      </Container>
    </>
  );
}
