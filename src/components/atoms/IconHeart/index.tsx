import SvgIcon from '@mui/material/SvgIcon';

import HeartIconDefault from '../../../icons/HeartIconDefault.svg?react';
import HeartIconClick from '../../../icons/HeartIconClick.svg?react';
import HeartIconHover from '../../../icons/HeartIconHover.svg?react';

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
