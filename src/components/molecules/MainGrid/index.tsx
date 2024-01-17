import { FC } from 'react';
import { Order } from '../../../services/images';
import { useGetImagesWithFavourites } from '../../../hooks';
import { BreedCardMain } from '../../atoms/BreedCardMain';
import { StyledBox, StyledSkeleton } from './MainGrid.styled';

type MainGridProps = {
  page: number;
  order: Order;
};

export const MainGrid: FC<MainGridProps> = ({ page, order }) => {
  const { data: favouritesImages, isLoading } = useGetImagesWithFavourites({
    page,
    order
  });

  console.log(favouritesImages);

  return (
    <StyledBox>
      {isLoading && <StyledSkeleton variant="rounded" />}
      {(favouritesImages || []).map(({ id, url, breeds, favouriteId }) => (
        <BreedCardMain
          key={id}
          id={id}
          url={url}
          breeds={breeds}
          favouriteId={favouriteId}
        />
      ))}
    </StyledBox>
  );
};
