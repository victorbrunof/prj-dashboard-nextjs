import {
  Box,
  Button,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  Image,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Container } from '../../components/Container';

interface User {
  name: {
    first: string;
    last: string;
  };
  dob: {
    age: number;
  };
  picture: {
    large: string;
    medium: string;
  };
  login: {
    username: string;
  };
  email: string;
}

export default function Dashboard() {
  const [user, setUser] = useState<User[]>([]);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const fetchUsers = async () => {
    const response = await axios.get('https://randomuser.me/api/', {
      params: {
        results: 5,
        // page: pagination,
        seed: 'abc',
      },
    });
    setUser(response.data.results);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Head>
        <title>Login</title>
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
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Idade</Th>}
                {isWideVersion && <Th>Username</Th>}
                {isWideVersion && <Th>Email</Th>}
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {user.map((user, i) => {
                return (
                  <Tr key={i}>
                    <Td px={['4', '4', '6']}>
                      <Box bg="gray.700" w="8" h="8" borderRadius="50%">
                        <Image
                          src={user.picture.medium}
                          alt={user.name.first}
                          borderRadius="full"
                        />
                      </Box>
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">{user.name.first}</Text>
                        <Text fontSize="sm" color="gray.300">
                          {user.name.last}
                        </Text>
                      </Box>
                    </Td>
                    {isWideVersion ?? (
                      <Td>
                        <Text fontWeight="bold">{user.dob.age}</Text>
                      </Td>
                    )}
                    {isWideVersion ?? (
                      <Td>
                        <Text fontWeight="bold">{user.dob.age}</Text>
                      </Td>
                    )}
                    {isWideVersion ?? (
                      <Td>
                        <Text fontWeight="bold">{user.login.username}</Text>
                      </Td>
                    )}
                    {isWideVersion ?? (
                      <Td>
                        <Text fontWeight="bold">{user.email}</Text>
                      </Td>
                    )}
                    <Button></Button>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Box>
      </Container>
    </>
  );
}
