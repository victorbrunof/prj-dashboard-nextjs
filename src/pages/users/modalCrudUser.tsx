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
  HStack,
} from '@chakra-ui/react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../components/Form/Input';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { useForm } from 'react-hook-form';

interface ModalCrudUserProps {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  cpf?: string;
  edit?: string;
}

interface CreateUserInput {
  name: string;
  email: string;
  phone: string;
  cpf: string;
}

const createUserFormSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'Nome inválido',
    })
    .min(3)
    .max(100),
  email: z.string().email({
    message: 'E-mail inválido',
  }),
  phone: z
    .string()
    .min(11, {
      message: 'phone precisa ter 11 digitos',
    })
    .max(11),
  cpf: z
    .string({
      invalid_type_error: 'CPF inválido',
    })
    .min(11, {
      message: 'CPF precisa ter 11 digitos',
    })
    .max(11),
});

type CreateUserFormInputs = z.infer<typeof createUserFormSchema>;

export default function ModalCrudUser({
  id,
  name,
  email,
  phone,
  cpf,
  edit,
}: ModalCrudUserProps) {
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

  async function handleCrudUser(data: CreateUserInput) {
    console.log(edit);
    if (edit === 'edit') {
      console.log('edit', data);
    } else if (edit === 'delete') {
      console.log('delete', id);
      onClose();
    } else {
      console.log('create', data);
    }
  }

  return (
    <>
      {edit === 'edit' ? (
        <Button
          onClick={onOpen}
          as="a"
          size="sm"
          fontSize="sm"
          colorScheme="purple"
          leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
        >
          {isWideVersion ? 'Editar/Deletar' : ''}
        </Button>
      ) : (
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
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          as="form"
          bg="gray.900"
          p="2"
          onSubmit={handleSubmit(handleCrudUser)}
        >
          <ModalHeader>{edit ? 'Editar Usuário' : 'Criar Usuário'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box flex="1" borderRadius={8} bg="gray.800" p="8">
              <VStack>
                <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
                  <Input
                    label="Nome completo"
                    defaultValue={edit && name}
                    error={errors.name}
                    {...register('name')}
                  />
                  <Input
                    type="email"
                    label="E-mail"
                    defaultValue={edit && email}
                    error={errors.email}
                    {...register('email')}
                  />
                  <Input
                    type="phone"
                    label="phone"
                    defaultValue={edit && phone}
                    error={errors.phone}
                    {...register('phone')}
                  />
                  <Input
                    type="cpf"
                    label="Cpf"
                    defaultValue={edit && cpf}
                    error={errors.cpf}
                    {...register('cpf')}
                  />
                </SimpleGrid>
              </VStack>
            </Box>
          </ModalBody>

          <ModalFooter>
            <HStack spacing="4">
              <Button
                type="submit"
                colorScheme="green"
                isLoading={isSubmitting}
              >
                {edit ? 'Editar' : 'Criar'}
              </Button>
              {edit && (
                <Button
                  type="submit"
                  colorScheme="red"
                  isLoading={isSubmitting}
                  onClick={() => {
                    edit = 'delete';
                  }}
                >
                  Delete
                </Button>
              )}
              <Button colorScheme="blue" onClick={onClose}>
                Close
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
