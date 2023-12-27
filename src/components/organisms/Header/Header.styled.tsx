import { AppBar, Box, styled } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  width: '1440px',
  borderRadius: '0px 0px 32px 32px',
  padding: '20px 140px',
  backgroundColor: theme.palette.grey[500],
  boxShadow: `3px 3px 0px 0px ${theme.palette.text.secondary}`
}));

export const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between'
});

export const StyledNavBarBox = styled(Box)({
  marginLeft: '60px',
  marginRight: '40px'
});
