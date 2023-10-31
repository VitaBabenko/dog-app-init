import { SvgIcon } from '@mui/material';

import IconPlusDefault from '../../../assets/icons/IconPlusDefault.svg?react';
import IconPlusHover from '../../../assets/icons/IconPlusHover.svg?react';

type IconPlusProps = {
  state: 'default' | 'hover';
};

export const ButtonIconPlus = ({ state = 'default' }: IconPlusProps) => {
  switch (state) {
    case 'hover': {
      return <SvgIcon component={IconPlusHover} inheritViewBox />;
    }
    default: {
      return <SvgIcon component={IconPlusDefault} inheritViewBox />;
    }
  }
};
