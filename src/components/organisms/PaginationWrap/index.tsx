import { Pagination } from '@mui/material';
import { useState } from 'react';

export const PaginationWrap = () => {
  const [page, setPage] = useState(1);
  const handleChange = (_e: React.ChangeEvent<unknown>, pageValue: number) => {
    setPage(pageValue);
  };

  return (
    <Pagination
      count={3}
      page={page}
      onChange={handleChange}
      showFirstButton
      showLastButton
    />
  );
};
