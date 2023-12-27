import { useParams } from 'react-router-dom';
import { BreedItem } from '../components/molecules/BreedItem';

export const BreedItemPage = () => {
  const { breedId } = useParams();

  return <BreedItem breedId={breedId} />;
};
