import { Box, styled } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 372px)',
  gridGap: 22,
  marginBottom: '25px',
  '& img': {
    marginBottom: '14px',
    height: '274px'
  },
  '& p': {
    padding: '0px 28px'
  },
  '& .MuiButton-text': {
    position: 'absolute',
    bottom: '8px',
    right: '5px',
    display: 'block',
    backgroundColor: 'transparent',
    color: theme.palette.warning.main
  }
}));
