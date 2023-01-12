import { Flex, Icon, Input } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

interface SearchBoxProps {
  childToParent: (childData: string) => void;
}

export function SearchBox({ childToParent }: SearchBoxProps) {
  const [search, setSearch] = useState('');

  const searchInputRef = useRef<HTMLInputElement>(null);

  const Change = () => {
    childToParent(search);
  };

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      maxWidth="400"
      color="gray.200"
      position="relative"
      bg="gray.900"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar"
        _placeholder={{ color: 'gray.400' }}
        ref={searchInputRef}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <Icon
        as={RiSearchLine}
        fontSize="20"
        cursor="pointer"
        onClick={() => {
          Change();
        }}
      />
    </Flex>
  );
}
