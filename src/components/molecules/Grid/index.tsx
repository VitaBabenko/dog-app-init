import { Box, IconButton, styled } from '@mui/material';
import { FC, useState } from 'react';
import { Order } from '../../../services/images';
import { CardItem } from '../../atoms/CardItem';
import { IconHeart } from '../../atoms/IconHeart';
import { useAddFavouritesMutation } from '../../../services/favourites';
import { useGetImagesWithFavourites } from '../../../hooks';

const StyledBox = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 275px)',
  gridAutoRows: '196px',
  gridGap: '20px',
  margin: '0 auto',
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

type GridProps = {
  page: number;
  order: Order;
};

export const Grid: FC<GridProps> = ({ page, order }) => {
  const [addFavourite] = useAddFavouritesMutation();
  const { data: favouritesImages, isLoading } = useGetImagesWithFavourites({
    page,
    order
  });
  const [isHoveredCard, setIsHoveredCard] = useState<number | null>(null);

  const handleBtnAdd = (id: string) => () => {
    addFavourite({ image_id: id });
  };

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <StyledBox>
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
              {item.isFavourite ? (
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px'
                  }}
                  onClick={handleBtnAdd(item.id)}
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
            </CardItem>
          );
        })}
      </StyledBox>
    </>
  );
};
