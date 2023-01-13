import { Box, Flex, Image, SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';
import { SearchBox } from '../../components/SearchBox';
import { Container } from '../../components/Container';

export default function SearchCat() {
  const [cat, setCat] = useState('');

  return (
    <Container>
      <Box flex="1" borderRadius={8} bg="gray.800" p="8">
        <Flex mb="8" justify="center" align="center">
          <SearchBox
            childToParent={setCat}
            placeholder="Ex: 100, 101, 200, 201, 300, 301, 400, 401, 500, 501"
          />
        </Flex>
        {cat && (
          <Image
            src={'https://http.cat/' + cat}
            alt="Cat"
            w="100%"
            maxW="20rem"
            margin="0 auto"
          />
        )}
      </Box>
    </Container>
  );
}
