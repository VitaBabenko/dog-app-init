// import { useState } from 'react';
import { SortingWrap } from '../components/organisms/SortingWrap';
import { Grid } from '../components/molecules/Grid';
import { PaginationWrap } from '../components/organisms/PaginationWrap';

export const MainPage = () => (
  // const [page, setPage] = useState(0);
  <>
    <SortingWrap />
    <Grid />
    <PaginationWrap />
  </>
);
