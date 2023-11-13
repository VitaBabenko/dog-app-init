import { Pagination } from '@mui/material';
import { FC } from 'react';

type PaginationWrapProps = {
  page: number;
  handleChange: (_event: React.ChangeEvent<unknown>, value: number) => void;
};

export const PaginationWrap: FC<PaginationWrapProps> = ({
  page,
  handleChange
}) => (
  <Pagination
    count={30}
    page={page}
    onChange={handleChange}
    showFirstButton
    showLastButton
  />
);
