import { useGetImagesQuery } from '../services/images';
import { useGetVotesQuery } from '../services/votes';
import { useTypedSelector } from '../services/store';
import { selectImagesWithVotes } from '../services/selectors';

type GetImagesWithVotesProps = {
  limit: number;
};

export const useGetImagesWithVotes = ({
  limit = 5
}: GetImagesWithVotesProps) => {
  const { isLoading: isLoadingImages } = useGetImagesQuery({
    limit
  });
  const { isLoading: isLoadingVotes } = useGetVotesQuery();
  const votesImages = useTypedSelector(
    selectImagesWithVotes({
      getImagesProps: { limit }
    })
  );

  return {
    data: votesImages,
    isLoading: isLoadingImages || isLoadingVotes
  };
};
