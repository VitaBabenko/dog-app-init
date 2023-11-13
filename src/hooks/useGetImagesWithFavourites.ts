import { useGetFavouritesQuery } from '../services/favourites';
import { useGetImagesQuery } from '../services/images';
import { useTypedSelector } from '../services/store';
import { selectImagesWithFavourites } from '../services/selectors';

type GetImagesWithFavouritesProps = {
  limit?: number;
  page: number;
};

export const useGetImagesWithFavourites = ({
  limit = 10,
  page = 0
}: GetImagesWithFavouritesProps) => {
  const { isLoading: isLoadingImages } = useGetImagesQuery({
    limit,
    page
  });
  const { isLoading: isLoadingFavourites } = useGetFavouritesQuery();
  const favouritesImages = useTypedSelector(
    selectImagesWithFavourites({
      getImagesProps: { limit, page }
    })
  );

  return {
    data: favouritesImages,
    isLoading: isLoadingImages || isLoadingFavourites
  };
};
