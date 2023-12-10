import { useState } from 'react';
import { BreedsGallery } from '../components/molecules/BreedsGallery';
import { PaginationWrap } from '../components/organisms/PaginationWrap';

export const BreedsPage = () => {
  const [page, setPage] = useState(1);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <BreedsGallery page={page} />
      <PaginationWrap page={page} handleChange={handleChange} />
    </>
  );
};
