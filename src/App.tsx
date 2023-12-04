import { Box, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from './components/organisms/Header';

import './App.css';

const StyledBox = styled(Box)({
  width: '1160px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '24px',
  paddingBottom: '35px'
});

function App() {
  return (
    <>
      <Header />
      <StyledBox>
        <Outlet />
      </StyledBox>
    </>
  );
}

export default App;
