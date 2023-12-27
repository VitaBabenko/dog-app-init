import { useGetFavouritesQuery } from '../services/favourites';
import { useGetImagesQuery, Order } from '../services/images';
import { useTypedSelector } from '../services/store';
import { selectImagesWithFavourites } from '../services/selectors';

type GetImagesWithFavouritesProps = {
  limit?: number;
  page: number;
  order?: Order;
};

export const useGetImagesWithFavourites = ({
  limit = 10,
  page = 0,
  order = Order.ASC
}: GetImagesWithFavouritesProps) => {
  const { isLoading: isLoadingImages, isFetching: isFetchingImages } =
    useGetImagesQuery({
      limit,
      page,
      order
    });
  const { isLoading: isLoadingFavourites } = useGetFavouritesQuery();
  const favouritesImages = useTypedSelector(
    selectImagesWithFavourites({
      getImagesProps: { limit, page, order }
    })
  );

  return {
    data: favouritesImages,
    isLoading: isLoadingImages || isLoadingFavourites || isFetchingImages
  };
};
