import { AppBar, Box, styled } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  width: '100%',
  borderRadius: '0px 0px 32px 32px',
  padding: '20px 140px',
  backgroundColor: theme.palette.grey[500],
  boxShadow: `3px 3px 0px 0px ${theme.palette.text.secondary}`,
  marginLeft: 'auto',
  marginRight: 'auto'
  // display: flex;
  // justify-content: flex-end;

  // @media screen and (minWidth: '375px') {
  //   maxWidth: '350px',
  // }

  // @media screen and (minWidth: '475px') {
  //   maxWidth: '450px',
  // }

  // @media screen and (minWidth: '768px') {
  //   maxWidth: '720px',
  //   padding: '30px 20px',
  //   alignItems: 'center',
  //   gap: '40px',
  // }

  // @media screen and (minWidth: '1280px') {
  //   maxWidth: '1200px',
  //   padding: '30px 50px',
  //   gap: '80px',
  // }

  // @media screen and (minWidth: '1440px') {
  //   maxWidth: '1400px',
  //   padding: '30px 50px',
  // }

  // @media screen and (minWidth: '1920px') {
  //   maxWidth: '1900px',
  // }

  // width: '1440px',
}));

export const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between'
});

export const StyledNavBarBox = styled(Box)({
  marginLeft: '60px',
  marginRight: '40px'
});
