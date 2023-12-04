import { Box, Button, Typography, Skeleton, styled } from '@mui/material';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { CardItem } from '../../atoms/CardItem';
import { useGetBreedsQuery } from '../../../services/breeds';

type GalleryProps = {
  page: number;
};

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 372px)',
  gridGap: 22,
  marginBottom: '25px',
  '& img': {
    marginBottom: '14px',
    height: '274px'
  },
  '& p': {
    padding: '0px 28px'
  },
  '& .MuiButton-text': {
    position: 'absolute',
    bottom: '8px',
    right: '5px',
    display: 'block',
    backgroundColor: 'transparent',
    color: theme.palette.warning.main
  }
}));

export const Gallery: FC<GalleryProps> = ({ page }) => {
  const { data: breeds, isLoading } = useGetBreedsQuery({ limit: 6, page });

  const [isHoveredCard, setIsHoveredCard] = useState<number | null>(null);

  return (
    <>
      {isLoading && <Skeleton variant="rounded" width={1160} height={844} />}
      <StyledBox>
        {(breeds || []).map((item, index) => {
          const isHover = isHoveredCard === index;

          return (
            <CardItem
              key={item.id}
              variant="primary"
              borderRadius={0}
              sx={{ paddingBottom: '29px' }}
              onMouseOver={() => setIsHoveredCard(index)}
              onMouseOut={() => setIsHoveredCard(null)}
            >
              <img src={item.image.url} alt={item.name} />
              <Typography fontSize={26} color="#5F556D">
                {item.name}
              </Typography>
              <Typography>
                <Typography component="span" fontSize={20} color="#5F556D">
                  Temperament:{' '}
                </Typography>
                <Typography component="span" fontSize={20} color="#ADA7B8">
                  {item.temperament}
                </Typography>
              </Typography>
              {isHover && (
                <Link to={`${item.id}`}>
                  <Button variant="text" color="inherit">
                    more
                  </Button>
                </Link>
              )}
            </CardItem>
          );
        })}
      </StyledBox>
    </>
  );
};
