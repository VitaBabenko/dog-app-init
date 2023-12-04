import { SvgIcon } from '@mui/material';

import DogPurpleFoot from '../../../assets/icons/DogPurpleFoot.svg?react';
import DogYellowFoot from '../../../assets/icons/DogYellowFoot.svg?react';

type DogFootIconProps = {
  state?: 'primary' | 'secondary';
};

export const IconDogFoot = ({ state = 'primary' }: DogFootIconProps) => {
  switch (state) {
    case 'secondary': {
      return <SvgIcon component={DogYellowFoot} inheritViewBox />;
    }
    default: {
      return <SvgIcon component={DogPurpleFoot} inheritViewBox />;
    }
  }
};
