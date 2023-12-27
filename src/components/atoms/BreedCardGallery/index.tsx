import { Button, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { CardWrapper } from '../CardWrapper';

type BreedCardGalleryProps = {
  id: number;
  image: {
    url: string;
  };
  name: string;
  temperament: string;
};

export const BreedCardGallery: FC<BreedCardGalleryProps> = ({
  id,
  image,
  name,
  temperament
}) => {
  const [isHoveredCard, setIsHoveredCard] = useState<boolean>(false);

  const handleMouseOver = () => setIsHoveredCard(true);
  const handleMouseOut = () => setIsHoveredCard(false);

  return (
    <CardWrapper
      key={id}
      variant="primary"
      borderRadius={0}
      sx={{ paddingBottom: '29px' }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img src={image.url} alt={name} />
      <Typography fontSize={26} color="#5F556D">
        {name}
      </Typography>
      <Typography>
        <Typography component="span" fontSize={20} color="#5F556D">
          Temperament:
        </Typography>
        <Typography component="span" fontSize={20} color="#ADA7B8">
          {temperament}
        </Typography>
      </Typography>
      {isHoveredCard && (
        <Link to={`${id}`}>
          <Button variant="text" color="inherit">
            more
          </Button>
        </Link>
      )}
    </CardWrapper>
  );
};
