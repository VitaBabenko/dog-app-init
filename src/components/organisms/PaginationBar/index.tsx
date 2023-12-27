import { Stack } from '@mui/material';
import { FC } from 'react';
import { useGetImagesWithFavourites } from '../../../hooks';
import { StyledPagination } from './PaginationBar.styled';

type PaginationBarProps = {
  page: number;
  handleChange: (_event: React.ChangeEvent<unknown>, value: number) => void;
};

export const PaginationBar: FC<PaginationBarProps> = ({
  page,
  handleChange
}) => {
  const { isLoading } = useGetImagesWithFavourites({ page });

  return (
    <Stack>
      {!isLoading && (
        <StyledPagination
          count={28}
          page={page}
          onChange={handleChange}
          showFirstButton
          showLastButton
        />
      )}
    </Stack>
  );
};
