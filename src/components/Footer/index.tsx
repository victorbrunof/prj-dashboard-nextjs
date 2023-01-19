import { Box, Container, Stack, Text } from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SocialButton } from './socialButton';

export function Footer() {
  return (
    <Box
      width="100%"
      margin="auto"
      bottom="0"
      position={{ base: 'relative', lg: 'fixed' }}
    >
      <Container
        as={Stack}
        maxW={'7xl'}
        py={5}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© 2023 Victor Bruno</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'GitHub'} href={'#'}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={'linkedin'} href={'#'}>
            <FaLinkedin />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
