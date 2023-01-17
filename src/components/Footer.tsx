import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { ReactNode } from 'react';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      rounded={'full'}
      w={10}
      h={10}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'gray.700',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export function Footer() {
  return (
    <Box width="100%" margin="auto" bottom="0" position="fixed">
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
