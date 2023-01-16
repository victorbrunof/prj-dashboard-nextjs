import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  useDisclosure,
  VStack,
  Image,
} from '@chakra-ui/react';
import { Input } from '../../components/Form/Input';
import { AiOutlineFileSearch } from 'react-icons/ai';

interface ModalUsersProps {
  name: string;
  picture: string;
  age: number;
  username: string;
  email: string;
}

export default function ModalUsers({
  name,
  picture,
  age,
  username,
  email,
}: ModalUsersProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        as="a"
        size="sm"
        fontSize="sm"
        colorScheme="purple"
      >
        <AiOutlineFileSearch />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="gray.900" p="2">
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box flex="1" borderRadius={8} bg="gray.800" p="8">
              <VStack>
                <Image src={picture} alt={picture} borderRadius="full" />
                <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
                  <Input
                    name="name"
                    label="Username"
                    value={username}
                    isReadOnly
                    // error={errors.name}
                  />
                  <Input
                    name="name"
                    label="Idade"
                    value={age}
                    isReadOnly
                    // error={errors.name}
                  />
                  <Input
                    name="name"
                    label="E-Mail"
                    value={email}
                    isReadOnly
                    // error={errors.name}
                  />
                </SimpleGrid>
              </VStack>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
