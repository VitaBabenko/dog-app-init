import { Box, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';
// import { Header } from './components/organisms/Header';

import './App.css';

const StyledContainerBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: '360px'
  },
  [theme.breakpoints.up('md')]: {
    width: '750px'
  },
  [theme.breakpoints.up('lg')]: {
    width: '1160px'
  },
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '24px',
  paddingBottom: '35px'
}));

function App() {
  return (
    <>
      {/* <Header /> */}
      <StyledContainerBox>
        <Outlet />
      </StyledContainerBox>
    </>
  );
}

export default App;
