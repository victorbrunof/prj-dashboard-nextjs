import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { UsersProvider } from '../contexts/UserContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <UsersProvider>
          <Component {...pageProps} />
        </UsersProvider>
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}
