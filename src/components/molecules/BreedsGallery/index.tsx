import { Skeleton } from '@mui/material';
import { FC } from 'react';
import { BreedCardGallery } from '../../atoms/BreedCardGallery';
import { useGetBreedsQuery } from '../../../services/breeds';
import { StyledBox } from './BreedsGallery.styled';

type BreedsGalleryProps = {
  page: number;
};

export const BreedsGallery: FC<BreedsGalleryProps> = ({ page }) => {
  const {
    data: breeds,
    isLoading,
    isFetching
  } = useGetBreedsQuery({ limit: 6, page });

  console.log('isLoading', isLoading);
  console.log('isFetching', isFetching);

  return (
    <StyledBox>
      {isLoading && isFetching && (
        <Skeleton variant="rounded" width={1160} height={1000} />
      )}
      {(breeds || []).map(({ id, image, name, temperament }) => (
        <BreedCardGallery
          key={id}
          id={id}
          image={image}
          name={name}
          temperament={temperament}
        />
      ))}
    </StyledBox>
  );
};
