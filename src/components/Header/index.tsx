import {
  Flex,
  Icon,
  IconButton,
  useBreakpointValue,
  Image,
} from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { Profile } from './Profile';

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        ></IconButton>
      )}

      <Image
        src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png"
        alt="logo"
        w="100%"
        maxW="12rem"
      />

      <Flex align="center" ml="auto">
        {/* <NotificationsNav /> */}
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
