import { SvgIcon } from '@mui/material';

import IconPlusDefault from '../../../assets/icons/IconPlusDefault.svg?react';
import IconPlusHover from '../../../assets/icons/IconPlusHover.svg?react';

type PlusIconProps = {
  state?: 'default' | 'hover';
};

export const IconPlus = ({ state = 'default' }: PlusIconProps) => {
  switch (state) {
    case 'hover': {
      return <SvgIcon component={IconPlusHover} inheritViewBox />;
    }
    default: {
      return <SvgIcon component={IconPlusDefault} inheritViewBox />;
    }
  }
};
