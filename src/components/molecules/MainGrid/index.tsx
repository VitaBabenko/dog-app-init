import { Box, IconButton, Button, Skeleton, styled } from '@mui/material';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Order } from '../../../services/images';
import { CardItem } from '../../atoms/CardItem';
import { IconHeart } from '../../atoms/IconHeart';
import { useGetImagesWithFavourites } from '../../../hooks';
import { useAddFavouritesMutation } from '../../../services/favourites';
import { IconDogFoot } from '../../atoms/IconDogFoot';
import { ArrowRight } from '../../atoms/ArrowRight';

type MainGridProps = {
  page: number;
  order: Order;
};

const StyledBox = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 275px)',
  gridAutoRows: '196px',
  gridGap: '20px',
  marginBottom: '25px',
  '& .MuiBox-root:first-of-type': {
    gridColumn: '1 / 3',
    gridRow: '1 / 3'
  },
  '& .MuiBox-root:nth-of-type(2)': {
    gridColumn: '3',
    gridRow: '1'
  },
  '& .MuiBox-root:nth-of-type(3)': {
    gridColumn: '4',
    gridRow: '1 / 3'
  },
  '& .MuiBox-root:nth-of-type(4)': {
    gridColumn: '1',
    gridRow: '3 / 5'
  },
  '& .MuiBox-root:nth-of-type(5)': {
    gridColumn: '2',
    gridRow: '3'
  },
  '& .MuiBox-root:nth-of-type(6)': {
    gridColumn: '3',
    gridRow: '2 / 4'
  },
  '& .MuiBox-root:nth-of-type(7)': {
    gridColumn: '4',
    gridRow: '3'
  },
  '& .MuiBox-root:nth-of-type(8)': {
    gridColumn: '2',
    gridRow: '4'
  },
  '& .MuiBox-root:nth-of-type(9)': {
    gridColumn: '3',
    gridRow: '4'
  },
  '& .MuiBox-root:nth-of-type(10)': {
    gridColumn: '4',
    gridRow: '4'
  }
});

export const MainGrid: FC<MainGridProps> = ({ page, order }) => {
  const [addFavourites] = useAddFavouritesMutation();
  const { data: favouritesImages, isLoading } = useGetImagesWithFavourites({
    page,
    order
  });

  console.log(favouritesImages);

  const [isHoveredCard, setIsHoveredCard] = useState<number | null>(null);

  const handleBtnAdd = (id: string) => () => {
    console.log('add favourite');
    addFavourites({ image_id: id });
  };

  return (
    <StyledBox>
      {isLoading && <Skeleton variant="rounded" width={1160} height={844} />}
      {(favouritesImages || []).map((item, index) => {
        const isHover = isHoveredCard === index;

        return (
          <CardItem
            key={item.id}
            variant="primary"
            borderRadius={0}
            onMouseOver={() => setIsHoveredCard(index)}
            onMouseOut={() => setIsHoveredCard(null)}
          >
            <img src={item.url} alt={item.id} height="100%" />
            {item.isFavourites ? (
              <IconButton
                sx={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px'
                }}
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
                onClick={handleBtnAdd(item.id)}
              >
                {isHover ? (
                  <IconHeart state="hover" />
                ) : (
                  <IconHeart state="default" />
                )}
              </IconButton>
            )}
            {isHover && item.breeds.length === 1 && (
              <Link to={`breeds/${item.breeds[0].id}`}>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    display: 'flex',
                    gap: '10px',
                    position: 'absolute',
                    bottom: '10px',
                    left: '50%',
                    transform: 'translate(-50%)',
                    width: '245px',
                    padding: '10px 20px'
                  }}
                >
                  <IconDogFoot state="secondary" />
                  {item.breeds[0].name}
                  <ArrowRight />
                </Button>
              </Link>
            )}
          </CardItem>
        );
      })}
    </StyledBox>
  );
};
