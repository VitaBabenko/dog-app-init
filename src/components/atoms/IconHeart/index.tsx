import { SvgIcon } from '@mui/material';

import HeartIconDefault from '../../../assets/icons/HeartIconDefault.svg?react';
import HeartIconClick from '../../../assets/icons/HeartIconClick.svg?react';
import HeartIconHover from '../../../assets/icons/HeartIconHover.svg?react';

type HeartIconProps = {
  state?: 'default' | 'hover' | 'active';
};

export const IconHeart = ({ state = 'default' }: HeartIconProps) => {
  switch (state) {
    case 'hover': {
      return <SvgIcon component={HeartIconHover} inheritViewBox />;
    }
    case 'active': {
      return <SvgIcon component={HeartIconClick} inheritViewBox />;
    }
    default: {
      return <SvgIcon component={HeartIconDefault} inheritViewBox />;
    }
  }
};
