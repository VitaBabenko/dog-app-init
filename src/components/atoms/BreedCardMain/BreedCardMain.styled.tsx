import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  position: 'absolute',
  bottom: '10px',
  left: '50%',
  transform: 'translate(-50%)',
  [theme.breakpoints.up('sm')]: {
    gap: '8x',
    width: '180px',
    padding: '8px 10px',
    fontSize: '14px'
  },
  [theme.breakpoints.up('md')]: {
    gap: '10x',
    width: '180px',
    padding: '8px 10px',
    fontSize: '16px'
  },
  [theme.breakpoints.up('lg')]: {
    width: '245px',
    padding: '10px 20px',
    fontSize: '18px'
  }
}));
