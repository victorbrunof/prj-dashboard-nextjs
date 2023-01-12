import { Box, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { PaginationItem } from './PaginationItem';

interface SearchBoxProps {
  setPagination: (childData: number) => void;
  setTotalData: (childData: number) => void;
  pagination: number;
  totalData: number;
}

export function Pagination({
  setPagination,
  pagination,
  setTotalData,
  totalData,
}: SearchBoxProps) {
  const [page, setPage] = useState([1, 2, 3, 4]);
  const [lastPage, setLastPage] = useState(1);

  const handlePagination = (page: number) => {
    setPagination(page);

    if (page > lastPage) {
      setLastPage(page);
      setTotalData(page * 5);
    } else if (page < lastPage) {
      setLastPage(page);
      setTotalData(page * 5);
    }

    if (page > 2) {
      setPage([page - 2, page - 1, page, page + 1]);
    } else {
      setPage([1, 2, 3, 4]);
    }
  };

  return (
    <Stack
      direction={['column', 'row']}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>{pagination === 1 ? 1 : (pagination - 1) * 5 + 1}</strong> -{' '}
        <strong>{totalData}</strong> de <strong>Usuarios</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {page.map((page) => {
          return (
            <PaginationItem
              key={page}
              number={page}
              isCurrent={page === pagination}
              handlePagination={handlePagination}
            />
          );
        })}
      </Stack>
    </Stack>
  );
}
