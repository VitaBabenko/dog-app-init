import { SvgIcon, styled } from '@mui/material';
import theme from '../../../theme/theme';

import IconDislike from '../../../assets/icons/IconDisLike.svg?react';

const BtnDisLike = styled('button')({
  padding: theme.spacing(1, 1.4),
  borderRadius: 30,
  backgroundColor: theme.palette.primary.main,
  border: theme.palette.primary.main,
  boxShadow: `2px 2px 0px 0px ${theme.palette.text.secondary}`,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    border: theme.palette.action.hover
  },
  '&:active': {
    backgroundColor: theme.palette.action.selected,
    border: theme.palette.action.selected
  }
});

export const ButttonIconDisLike = () => (
  <BtnDisLike>
    <SvgIcon
      component={IconDislike}
      sx={{ width: 16, height: 17 }}
      inheritViewBox
    />
  </BtnDisLike>
);
