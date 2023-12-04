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
    (images, favourites) => {
      const favouriteIds = new Set(
        favourites.map(favourite => favourite.image_id)
      );
      return images.map(image => ({
        ...image,
        isFavourite: favouriteIds.has(image.id)
      }));
    }
  );
