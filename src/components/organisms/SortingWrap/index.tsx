import { Stack, Typography, IconButton, SvgIcon, styled } from '@mui/material';
import { FC } from 'react';
import { Order } from '../../../services/images';
import IconUpFilter from '../../../assets/icons/IconUpFilter.svg?react';
import IconDownFilter from '../../../assets/icons/IconDownFilter.svg?react';
import IconRandomFilter from '../../../assets/icons/IconRandomFilter.svg?react';

type SortingWrapProps = {
  order: Order;
  onOrderClick: (order: Order) => void;
};

const StyledStack = styled(Stack)({
  justifyContent: 'flex-end',
  width: '1160px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '36px'
});

export const SortingWrap: FC<SortingWrapProps> = ({ order, onOrderClick }) => (
  <StyledStack direction="row" spacing={2}>
    <Typography color="#ADA7B8">Sort by:</Typography>
    {order === Order.ASC ? (
      <IconButton
        color="secondary"
        onClick={() => onOrderClick(Order.ASC)}
        sx={{
          width: 58,
          height: 36,
          border: '2px solid #FFCF32',
          backgroundColor: '#FFF',
          boxShadow: '3px 3px 0px 0px #FFCF32'
        }}
      >
        <SvgIcon
          component={IconUpFilter}
          inheritViewBox
          sx={{ width: 17, height: 20 }}
        />
      </IconButton>
    ) : (
      <IconButton
        color="secondary"
        onClick={() => onOrderClick(Order.ASC)}
        sx={{ width: 58, height: 36 }}
      >
        <SvgIcon
          component={IconUpFilter}
          inheritViewBox
          sx={{ width: 17, height: 20 }}
        />
      </IconButton>
    )}
    {order === Order.DESC ? (
      <IconButton
        color="secondary"
        onClick={() => onOrderClick(Order.DESC)}
        sx={{
          width: 58,
          height: 36,
          border: '2px solid #FFCF32',
          backgroundColor: '#FFF',
          boxShadow: '3px 3px 0px 0px #FFCF32'
        }}
      >
        <SvgIcon
          component={IconDownFilter}
          inheritViewBox
          sx={{
            width: 17,
            height: 20
          }}
        />
      </IconButton>
    ) : (
      <IconButton
        color="secondary"
        onClick={() => onOrderClick(Order.DESC)}
        sx={{ width: 58, height: 36 }}
      >
        <SvgIcon
          component={IconDownFilter}
          inheritViewBox
          sx={{ width: 17, height: 20 }}
        />
      </IconButton>
    )}
    {order === Order.RANDOM ? (
      <IconButton
        color="secondary"
        onClick={() => onOrderClick(Order.RANDOM)}
        sx={{
          width: 58,
          height: 36,
          border: '2px solid #FFCF32',
          backgroundColor: '#FFF',
          boxShadow: '3px 3px 0px 0px #FFCF32'
        }}
      >
        <SvgIcon
          component={IconRandomFilter}
          inheritViewBox
          sx={{ width: 17, height: 20 }}
        />
      </IconButton>
    ) : (
      <IconButton
        color="secondary"
        onClick={() => onOrderClick(Order.RANDOM)}
        sx={{ width: 58, height: 36 }}
      >
        <SvgIcon
          component={IconRandomFilter}
          inheritViewBox
          sx={{ width: 17, height: 20 }}
        />
      </IconButton>
    )}
  </StyledStack>
);
