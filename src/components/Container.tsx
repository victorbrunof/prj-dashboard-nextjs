import { Box, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Footer } from './Footer';

interface InterfaceProps {
  children: ReactNode;
}

export function Container({ children }: InterfaceProps) {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px={{ base: '2', lg: '6' }}
        mb="10%"
      >
        <Sidebar />
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
}
