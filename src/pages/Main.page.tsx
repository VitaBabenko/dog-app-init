import { useState } from 'react';
import { SortingWrap } from '../components/organisms/SortingWrap';
import { Grid } from '../components/molecules/Grid';
import { PaginationWrap } from '../components/organisms/PaginationWrap';

export const MainPage = () => {
  const [page, setPage] = useState(1);
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <SortingWrap />
      <Grid page={page} />
      <PaginationWrap page={page} handleChange={handleChange} />
    </>
  );
};
