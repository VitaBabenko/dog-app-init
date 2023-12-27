import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { imagesApi, Order } from '../images';
import { favouritesApi } from '../favourites';

export interface GetImagesProps {
  getImagesProps: {
    limit: number;
    page: number;
    order: Order;
  };
}

export const selectImagesWithFavourites = ({
  getImagesProps
}: GetImagesProps) =>
  createSelector(
    (state: RootState) =>
      imagesApi.endpoints.getImages.select(getImagesProps)(state)?.data || [],
    (state: RootState) =>
      favouritesApi.endpoints.getFavourites.select()(state)?.data || [],
    (images, favourites) =>
      images.map(image => {
        const currentFavourite = favourites.find(
          favourite => favourite.image_id === image.id
        );
        return {
          ...image,
          favouriteId: currentFavourite ? currentFavourite.id : null
        };
      })
  );
