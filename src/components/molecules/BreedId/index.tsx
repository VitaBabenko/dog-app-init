import { Box, Typography, IconButton, Skeleton, styled } from '@mui/material';
import { FC } from 'react';
import { useGetImageByIdQuery } from '../../../services/images';
import { useGetBreedByIdQuery } from '../../../services/breeds';
import { CardItem } from '../../atoms/CardItem';
import { IconDogFoot } from '../../atoms/IconDogFoot';
import { GroupDogFoot } from '../../atoms/GroupDogFoot';

type BreedIdProps = {
  breedId: string | undefined;
};

const StyledAllBox = styled(Box)({
  paddingBottom: '100px'
});

const StyledBox = styled(Box)({
  display: 'flex',
  gap: '100px',
  paddingTop: '50px',
  paddingBottom: '128px'
});

const StyledIconButton = styled(IconButton)({
  position: 'absolute',
  left: '0%'
});

export const BreedId: FC<BreedIdProps> = ({ breedId }) => {
  const id = Number(breedId);

  const { data: breed, isLoading: isLoadingBreed } = useGetBreedByIdQuery({
    id
  });

  console.log(breed);

  const { data: image, isLoading: isLoadingImage } = useGetImageByIdQuery(
    {
      imageId: breed?.reference_image_id
    },
    { skip: !breed?.reference_image_id }
  );

  return (
    <StyledAllBox>
      <StyledBox>
        {isLoadingImage ? (
          <Skeleton variant="rounded" width={485} height={412} />
        ) : (
          <CardItem variant="smallRadiusBorder" borderRadius={0}>
            <img src={image?.url} alt={image?.id} />
          </CardItem>
        )}
        {isLoadingBreed ? (
          <Skeleton variant="rounded" width={485} height={412} />
        ) : (
          <Box>
            <Typography variant="h1" fontSize={40} color="#5F556D">
              {breed?.name}
              <IconButton>
                <IconDogFoot state="primary" />
              </IconButton>{' '}
            </Typography>
            <Typography>
              <Typography component="span">Weight Range:</Typography>
              <Typography component="span">
                {breed?.weight.metric} kg.
              </Typography>
            </Typography>
            <Typography>
              <Typography component="span">Height:</Typography>
              <Typography component="span">
                {breed?.height.metric} sm.
              </Typography>
            </Typography>
            <Typography>
              <Typography component="span">Life span:</Typography>
              <Typography component="span">{breed?.life_span}</Typography>
            </Typography>
            <Typography>
              {breed?.origin && (
                <Typography component="span">Origin:</Typography>
              )}
              <Typography component="span">{breed?.origin}</Typography>
            </Typography>
            <Typography>
              <Typography component="span">Temperament:</Typography>
              <Typography component="span">{breed?.temperament}</Typography>
            </Typography>
          </Box>
        )}
      </StyledBox>
      <StyledIconButton>
        <GroupDogFoot />
      </StyledIconButton>
    </StyledAllBox>
  );
};
