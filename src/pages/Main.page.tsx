import { useState } from 'react';
import { useGetImagesWithFavourites } from '../hooks';
import { SortingWrap } from '../components/organisms/SortingWrap';
import { Grid } from '../components/molecules/Grid';
import { Order } from '../services/images';
import { PaginationWrap } from '../components/organisms/PaginationWrap';

export const MainPage = () => {
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState(Order.ASC);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const onOrderClick = (value: Order) => {
    setOrder(value);
  };

  const { isLoading } = useGetImagesWithFavourites({
    page,
    order
  });

  return (
    <>
      {!isLoading && <SortingWrap order={order} onOrderClick={onOrderClick} />}
      <Grid page={page} order={order} />
      {!isLoading && <PaginationWrap page={page} handleChange={handleChange} />}
    </>
  );
};
