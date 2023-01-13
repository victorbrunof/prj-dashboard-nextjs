import { Box, Button, Flex, Image } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { Container } from '../../components/Container';

interface IDog {
  url: string;
}

export default function RaffleDog() {
  const [dog, setDog] = useState<IDog>({} as IDog);
  const [loading, setLoading] = useState(false);

  const handleFetchDog = async () => {
    setLoading(true);
    const response = await axios.get('https://random.dog/woof.json', {});
    setDog(response.data);
    setLoading(false);
  };

  return (
    <Container>
      <Box flex="1" borderRadius={8} bg="gray.800" p="8">
        <Flex mb="8" justify="center" align="center">
          <Button
            colorScheme="blue"
            w="14rem"
            h="4rem"
            onClick={() => handleFetchDog()}
            disabled={loading}
          >
            Girar
          </Button>
        </Flex>
        {dog.url && (
          <Image src={dog.url} alt="" w="100%" maxW="14rem" margin="0 auto" />
        )}
      </Box>
    </Container>
  );
}
