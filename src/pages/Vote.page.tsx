import { IconButton, SvgIcon } from '@mui/material';
import { useGetImagesWithVotes } from '../hooks';
import { useAddVotesMutation } from '../services/votes';
import { CardWrapper } from '../components/atoms/CardWrapper';
import IconLike from '../assets/icons/IconLike.svg?react';
import IconDisLike from '../assets/icons/IconDisLike.svg?react';

export const VotePage = () => {
  const [addVotes] = useAddVotesMutation();
  const { data: votesImages, isLoading } = useGetImagesWithVotes({ limit: 5 });

  console.log('votesImages', votesImages);

  const handleBtnAddLike = (id: string) => () => {
    addVotes({ image_id: id, value: 'like' });
  };

  const handleBtnAddDisLike = (id: string) => () => {
    addVotes({ image_id: id, value: 'dislike' });
  };

  return (
    <>
      {isLoading && <div>loading...</div>}
      {(votesImages || []).map(item => (
        <CardWrapper key={item.id} variant="smallRadiusBorder" borderRadius={0}>
          <img src={item.url} alt={item.id} height="100%" />
          <IconButton
            color="primary"
            sx={{
              position: 'absolute',
              bottom: '38px',
              left: '40%'
            }}
            onClick={handleBtnAddLike(item.id)}
          >
            <SvgIcon
              component={IconLike}
              inheritViewBox
              sx={{
                width: 17,
                height: 20
              }}
            />
          </IconButton>
          <IconButton
            color="primary"
            sx={{
              position: 'absolute',
              bottom: '38px',
              right: '40%'
            }}
            onClick={handleBtnAddDisLike(item.id)}
          >
            <SvgIcon
              component={IconDisLike}
              inheritViewBox
              sx={{ width: 17, height: 20 }}
            />
          </IconButton>
        </CardWrapper>
      ))}
    </>
  );
};
