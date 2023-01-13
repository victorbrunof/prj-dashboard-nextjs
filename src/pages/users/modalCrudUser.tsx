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
  useBreakpointValue,
  Icon,
} from '@chakra-ui/react';
import { Input } from '../../components/Form/Input';
import { RiAddLine } from 'react-icons/ri';

export default function DashboardModal() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        as="a"
        size="sm"
        fontSize="sm"
        colorScheme="pink"
        leftIcon={<Icon as={RiAddLine} fontSize="20" />}
      >
        Criar Novo Usuario
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="gray.900" p="2">
          <ModalHeader>Modal</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box flex="1" borderRadius={8} bg="gray.800" p="8">
              <VStack>
                <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
                  <Input name="name" label="Nome completo" />
                  <Input name="email" type="email" label="E-mail" />
                  <Input name="telefone" type="telefone" label="Telefone" />
                  <Input name="cpf" type="cpf" label="Cpf" />
                </SimpleGrid>
              </VStack>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Delete
            </Button>
            <Button as="a" colorScheme="purple">
              Editar
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              Create
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
