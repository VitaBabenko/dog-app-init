import { AppBar, Box, SvgIcon, styled } from '@mui/material';
import { NavBar } from '../../molecules/NavBar';
import { IconHeart } from '../../atoms/IconHeart';
import { IconPlus } from '../../atoms/IconPlus';

import LogoIcon from '../../../assets/icons/LogoIcon.svg?react';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  alignItems: 'center',
  borderRadius: '0px 0px 32px 32px',
  padding: '20px 100px 16px 100px',
  backgroundColor: theme.palette.grey[500],
  boxShadow: `3px 3px 0px 0px ${theme.palette.text.secondary}`
}));

const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  maxWidth: '1161px'
});

const StyledNavBarBox = styled(Box)({
  marginLeft: '60px',
  marginRight: '40px'
});

const StyledIconPlusBox = styled(Box)({
  display: 'flex',
  margin: '0 0 0 30px'
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
      <StyledIconPlusBox>
        <IconPlus />
      </StyledIconPlusBox>
    </StyledBox>
  </StyledAppBar>
);
