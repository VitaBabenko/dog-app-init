import { AppBar, Box, SvgIcon, styled } from '@mui/material';
import { NavBar } from '../../molecules/NavBar';
import { IconHeart } from '../../atoms/IconHeart';
import { IconPlus } from '../../atoms/IconPlus';

import LogoIcon from '../../../assets/icons/LogoIcon.svg?react';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  width: '1440px',
  borderRadius: '0px 0px 32px 32px',
  padding: '20px 140px',
  backgroundColor: theme.palette.grey[500],
  boxShadow: `3px 3px 0px 0px ${theme.palette.text.secondary}`
}));

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between'
});

const StyledNavBarBox = styled(Box)({
  marginLeft: '60px',
  marginRight: '40px'
});

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
