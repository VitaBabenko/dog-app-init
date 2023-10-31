import { SvgIcon, styled } from '@mui/material';
import theme from '../../../theme/theme';

import IconUpFilter from '../../../assets/icons/IconUpFilter.svg?react';
import IconDownFilter from '../../../assets/icons/IconDownFilter.svg?react';
import IconRandomFilter from '../../../assets/icons/IconRandomFilter.svg?react';

type IconFilterProps = {
  state: 'default' | 'down' | 'random';
};

const BtnFilter = styled('button')({
  padding: theme.spacing(0.8, 3.5),
  borderRadius: 6,
  backgroundColor: theme.palette.grey[300],
  boxShadow: `3px 3px 0px 0px ${theme.palette.text.secondary}`,
  border: `0.6px solid ${theme.palette.common.black}`,
  transition: 'box-shadow .2s ease',
  '&:hover': {
    boxShadow: `3px 3px 0px 0px ${theme.palette.warning.main}`,
    border: `1px solid ${theme.palette.warning.main}`,
    backgroundColor: 'transparent',
    outline: 'none'
  },
  '&:active, &:focus': {
    backgroundColor: theme.palette.warning.main,
    boxShadow: `3px 3px 0px 0px ${theme.palette.text.secondary}`,
    border: `1px solid ${theme.palette.text.secondary}`
  }
});

export const ButtonIconFilter = ({ state = 'default' }: IconFilterProps) => {
  switch (state) {
    case 'down': {
      return (
        <BtnFilter>
          <SvgIcon component={IconDownFilter} inheritViewBox />
        </BtnFilter>
      );
    }
    case 'random': {
      return (
        <BtnFilter>
          <SvgIcon component={IconRandomFilter} inheritViewBox />
        </BtnFilter>
      );
    }
    default: {
      return (
        <BtnFilter>
          <SvgIcon component={IconUpFilter} inheritViewBox />
        </BtnFilter>
      );
    }
  }
};
