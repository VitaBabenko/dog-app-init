import { useState } from 'react';
import { useGetImagesWithFavourites } from '../hooks';
import { SortingBar } from '../components/organisms/SortingBar';
import { MainGrid } from '../components/molecules/MainGrid';
import { Order } from '../services/images';
import { PaginationBar } from '../components/organisms/PaginationBar';

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
      <SortingBar order={order} onOrderClick={onOrderClick} />
      <MainGrid page={page} order={order} />
      {!isLoading && <PaginationBar page={page} handleChange={handleChange} />}
    </>
  );
};
