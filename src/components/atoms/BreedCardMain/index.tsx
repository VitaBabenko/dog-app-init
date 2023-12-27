import { IconButton } from '@mui/material';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { CardWrapper } from '../CardWrapper';
import { IconHeart } from '../IconHeart';
import {
  useAddFavouritesMutation,
  useDeleteFavouritesMutation
} from '../../../services/favourites';
import { IconDogFoot } from '../IconDogFoot';
import { ArrowRight } from '../ArrowRight';
import { StyledButton } from './BreedCardMain.styled';

type BreedCardMainProps = {
  id: string;
  url: string;
  breeds: [
    {
      id: number;
      name: string;
    }
  ];
  favouriteId: string | null;
};

export const BreedCardMain: FC<BreedCardMainProps> = ({
  id,
  url,
  breeds,
  favouriteId
}) => {
  const [addFavourites] = useAddFavouritesMutation();
  const [deleteFavourites] = useDeleteFavouritesMutation();
  const [isHoveredCard, setIsHoveredCard] = useState<boolean>(false);

  const handleMouseOver = () => setIsHoveredCard(true);
  const handleMouseOut = () => setIsHoveredCard(false);

  const handleBtnAdd = (breedId: string) => () => {
    console.log('add favourite');
    addFavourites({ image_id: breedId });
  };

  const handleBtnDelete = (breedId: string) => () => {
    console.log('delete');
    deleteFavourites({ id: breedId });
  };

  return (
    <CardWrapper
      key={id}
      variant="primary"
      borderRadius={0}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img src={url} alt={id} height="100%" />
      {favouriteId !== null ? (
        <IconButton
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px'
          }}
          onClick={handleBtnDelete(favouriteId)}
        >
          <IconHeart state="active" />
        </IconButton>
      ) : (
        <IconButton
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px'
          }}
          onClick={handleBtnAdd(id)}
        >
          {isHoveredCard ? (
            <IconHeart state="hover" />
          ) : (
            <IconHeart state="default" />
          )}
        </IconButton>
      )}
      {isHoveredCard && breeds.length === 1 && (
        <Link to={`breeds/${breeds[0].id}`}>
          <StyledButton variant="contained" color="secondary">
            <IconDogFoot state="secondary" />
            {breeds[0].name}
            <ArrowRight />
          </StyledButton>
        </Link>
      )}
    </CardWrapper>
  );
};
