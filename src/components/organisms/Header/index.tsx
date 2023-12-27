import { SvgIcon } from '@mui/material';
import { NavBar } from '../../molecules/NavBar';
import { IconHeart } from '../../atoms/IconHeart';
import { IconPlus } from '../../atoms/IconPlus';
import { StyledAppBar, StyledBox, StyledNavBarBox } from './Header.styled';

import LogoIcon from '../../../assets/icons/LogoIcon.svg?react';

export const Header = () => (
  <StyledAppBar position="static">
    <StyledBox>
      <SvgIcon
        component={LogoIcon}
        inheritViewBox
        sx={{ width: 201, height: 40 }}
      />
      <StyledNavBarBox>
        <NavBar />
      </StyledNavBarBox>
      <IconHeart state="hover" />
      <IconPlus />
    </StyledBox>
  </StyledAppBar>
);
