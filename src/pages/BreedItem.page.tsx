import { useParams } from 'react-router-dom';
import { BreedId } from '../components/molecules/BreedId';

export const BreedItemPage = () => {
  const { breedId } = useParams();

  return <BreedId breedId={breedId} />;
};
