import { Button, Flex, Stack } from '@chakra-ui/react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../components/Form/Input';
import Router from 'next/router';

interface SignInFormData {
  email: string;
  password: string;
}

const signInFormSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z
    .string()
    .nonempty('Senha obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
});

type SignInFormInputs = z.infer<typeof signInFormSchema>;

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<SignInFormInputs>({ resolver: zodResolver(signInFormSchema) });

  async function handleSignIn(data: SignInFormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    if (
      data.password === '123456' ||
      data.email === 'victorbrunof@icloud.com'
    ) {
      Router.push('/dashboard');
    } else {
      alert('Senha ou email incorretos');
    }
  }

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Realizar Login" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          w="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">
            <Input
              type="email"
              label="E-mail"
              error={errors.email}
              {...register('email')}
            />
            <Input
              type="password"
              label="Senha"
              error={errors.password}
              {...register('password')}
            />
          </Stack>

          <Button
            type="submit"
            mt="6"
            colorScheme="pink"
            size="lg"
            isLoading={isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
