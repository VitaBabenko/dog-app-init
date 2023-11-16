import { useState } from 'react';
import { SortingWrap } from '../components/organisms/SortingWrap';
import { Grid } from '../components/molecules/Grid';
import { Order } from '../services/images';
import { PaginationWrap } from '../components/organisms/PaginationWrap';

export const MainPage = () => {
  const [page, setPage] = useState(1);
  const ASCFilter = Order.ASC;
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <SortingWrap />
      <Grid page={page} order={ASCFilter} />
      <PaginationWrap page={page} handleChange={handleChange} />
    </>
  );
};
