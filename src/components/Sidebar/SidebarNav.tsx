import { Stack } from '@chakra-ui/react';
import { RiContactsLine, RiDashboardLine } from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-star">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">
          Dashboard
        </NavLink>
        <NavLink icon={RiContactsLine} href="/users">
          Usuários
        </NavLink>
        <NavLink icon={RiContactsLine} href="/searchCat">
          Buscar Gato
        </NavLink>
        <NavLink icon={RiContactsLine} href="/raffleDog">
          Sortear Cachorro
        </NavLink>
      </NavSection>
    </Stack>
  );
}
