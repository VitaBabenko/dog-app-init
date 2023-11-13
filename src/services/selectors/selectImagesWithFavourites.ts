import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { imagesApi } from '../images';
import { favouriteApi } from '../favourites';

export interface GetImagesProps {
  getImagesProps: {
    limit: number;
    page: number;
  };
}

export const selectImagesWithFavourites = ({
  getImagesProps
}: GetImagesProps) =>
  createSelector(
    (state: RootState) =>
      imagesApi.endpoints.getImages.select(getImagesProps)(state)?.data || [],
    (state: RootState) =>
      favouriteApi.endpoints.getFavourites.select()(state)?.data || [],
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
