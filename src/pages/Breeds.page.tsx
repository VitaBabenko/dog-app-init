import { useState } from 'react';
import { useGetBreedsQuery } from '../services/breeds';
import { BreedsGallery } from '../components/molecules/BreedsGallery';
import { PaginationBar } from '../components/organisms/PaginationBar';

export const BreedsPage = () => {
  const [page, setPage] = useState(1);

  const { isLoading } = useGetBreedsQuery({ limit: 6, page });

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <BreedsGallery page={page} />
      {!isLoading && <PaginationBar page={page} handleChange={handleChange} />}
    </>
  );
};
