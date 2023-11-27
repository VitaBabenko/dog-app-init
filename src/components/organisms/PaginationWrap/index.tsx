import { Pagination, Stack, styled } from '@mui/material';
import { FC } from 'react';
import { useGetImagesWithFavourites } from '../../../hooks';

type PaginationWrapProps = {
  page: number;
  handleChange: (_event: React.ChangeEvent<unknown>, value: number) => void;
};

const StyledPagination = styled(Pagination)({
  display: 'flex',
  justifyContent: 'flex-end'
});

export const PaginationWrap: FC<PaginationWrapProps> = ({
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
