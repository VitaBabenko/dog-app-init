import { useState } from 'react';
import { Gallery } from '../components/molecules/Gallery';
import { PaginationWrap } from '../components/organisms/PaginationWrap';

export const BreedsPage = () => {
  const [page, setPage] = useState(1);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <Gallery page={page} />
      <PaginationWrap page={page} handleChange={handleChange} />
    </>
  );
};
