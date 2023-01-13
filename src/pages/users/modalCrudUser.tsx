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
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../components/Form/Input';
import { RiAddLine } from 'react-icons/ri';
import { useForm } from 'react-hook-form';

interface CreateUserInput {
  name: string;
  email: string;
  telefone: string;
  cpf: string;
}

const createUserFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email({
    message: 'E-mail inválido',
  }),
  telefone: z.string().min(11).max(11),
  cpf: z.string().min(11).max(11),
});

type CreateUserFormInputs = z.infer<typeof createUserFormSchema>;

export default function DashboardModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<CreateUserFormInputs>({
    resolver: zodResolver(createUserFormSchema),
  });

  async function handleCreateUser(data: CreateUserInput) {
    console.log(data);
  }

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
        <ModalContent
          as="form"
          bg="gray.900"
          p="2"
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <ModalHeader>Create User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box flex="1" borderRadius={8} bg="gray.800" p="8">
              <VStack>
                <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
                  <Input label="Nome completo" {...register('name')} />
                  <Input type="email" label="E-mail" {...register('email')} />
                  <Input
                    type="telefone"
                    label="Telefone"
                    {...register('telefone')}
                  />
                  <Input type="cpf" label="Cpf" {...register('cpf')} />
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
            <Button type="submit" colorScheme="blue">
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
