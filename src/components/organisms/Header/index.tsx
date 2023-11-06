import { AppBar, Box, SvgIcon } from '@mui/material';
import { NavBar } from '../../molecules/NavBar';
import { IconHeart } from '../../atoms/IconHeart';
import { IconPlus } from '../../atoms/IconPlus';
import theme from '../../../theme/theme';

import LogoIcon from '../../../assets/icons/LogoIcon.svg?react';

export const Header = () => (
  <AppBar
    position="static"
    sx={{
      alignItems: 'center',
      borderRadius: '0px 0px 32px 32px',
      padding: '20px 100px 16px 100px',
      backgroundColor: theme.palette.grey[500],
      boxShadow: `3px 3px 0px 0px ${theme.palette.text.secondary}`
    }}
  >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        maxWidth: '1161px'
      }}
    >
      <SvgIcon
        component={LogoIcon}
        inheritViewBox
        sx={{ width: 201, height: 40 }}
      />
      <Box sx={{ marginLeft: '60px', marginRight: '40px' }}>
        <NavBar />
      </Box>
      <IconHeart state="hover" />
      <Box sx={{ display: 'flex', margin: '0 0 0 30px' }}>
        <IconPlus />
      </Box>
    </Box>
  </AppBar>
);
