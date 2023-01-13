import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Link,
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
import { useState } from 'react';
import { RiPencilLine } from 'react-icons/ri';
import { Container } from '../../components/Container';
import { Pagination } from '../../components/Pagination';
import DashboardModal from './modalCrudUser';

export default function Users() {
  const [pagination, setPagination] = useState(1);
  const [totalData, setTotalData] = useState(10);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const Users = [
    {
      id: 1,
      name: 'John Doe',
      email: '',
      created_at: '04 de Abril, 2021',
      phone: '(11) 99999-9999',
      cpf: '999.999.999-99',
    },
    {
      id: 2,
      name: 'Victor',
      email: 'victorbrunof@icloud.com',
      created_at: '04 de Abril, 2021',
      phone: '(11) 99999-9999',
      cpf: '999.999.999-99',
    },
  ];

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
            <DashboardModal />
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
              {Users.map((user) => {
                return (
                  <Tr key={user.id}>
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
                        <Text fontWeight="bold">22/12/1997</Text>
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
                      <Button
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        {isWideVersion ? 'Editar' : ''}
                      </Button>
                    </Td>
                    <Td>
                      {isWideVersion && (
                        <Button
                          size="sm"
                          fontSize="sm"
                          colorScheme="purple"
                          leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                        >
                          {isWideVersion ? 'Deletar' : ''}
                        </Button>
                      )}
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
