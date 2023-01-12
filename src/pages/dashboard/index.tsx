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
} from '@chakra-ui/react';
import Head from 'next/head';
import { Container } from '../../components/Container';

export default function Dashboard() {
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
                <Th>Idade</Th>
                <Th>Username</Th>
                <Th>Email</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6" color="gray.300" width="4">
                  Image
                </Td>
                <Td>Victor</Td>
                <Td>Victor32</Td>
                <Td>Victorbrunof@icloud.com</Td>
                <Td>
                  <Button></Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Container>
    </>
  );
}
