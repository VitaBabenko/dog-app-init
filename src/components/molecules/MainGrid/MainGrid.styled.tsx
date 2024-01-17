import { Box, Skeleton, styled } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridAutoRows: '196px',
  gridGap: '20px',
  marginBottom: '25px',
  justifyContent: 'center',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 150px)',
    '& .MuiBox-root:first-of-type': {
      gridColumn: 'span 2',
      gridRow: 'span 2'
    },
    '& .MuiBox-root:nth-of-type(2)': {
      gridColumn: ' span 2',
      gridRow: 'span 1'
    },
    '& .MuiBox-root:nth-of-type(3)': {
      gridColumn: '1',
      gridRow: 'span 1'
    },
    '& .MuiBox-root:nth-of-type(4)': {
      gridColumn: '2',
      gridRow: 'span 1'
    },
    '& .MuiBox-root:nth-of-type(5)': {
      gridColumn: 'span 2',
      gridRow: 'span 1'
    },
    '& .MuiBox-root:nth-of-type(6)': {
      gridColumn: 'span 2',
      gridRow: 'span 2'
    },
    '& .MuiBox-root:nth-of-type(7)': {
      gridColumn: '1',
      gridRow: 'span 1'
    },
    '& .MuiBox-root:nth-of-type(8)': {
      gridColumn: '2',
      gridRow: 'span 1'
    },
    '& .MuiBox-root:nth-of-type(9)': {
      gridColumn: '1',
      gridRow: 'span 1'
    },
    '& .MuiBox-root:nth-of-type(10)': {
      gridColumn: '2',
      gridRow: 'span 1'
    }
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 230px)',
    '& .MuiBox-root:nth-of-type(2)': {
      gridColumn: '3',
      gridRow: '1'
    },
    '& .MuiBox-root:nth-of-type(5)': {
      gridColumn: '3',
      gridRow: '2 / span 2'
    },
    '& .MuiBox-root:nth-of-type(7)': {
      gridColumn: '3',
      gridRow: '4 / span 2'
    },
    '& .MuiBox-root:nth-of-type(8)': {
      gridColumn: '3',
      gridRow: '6'
    }
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 275px)',
    '& .MuiBox-root:nth-of-type(3)': {
      gridColumn: '4',
      gridRow: '4'
    },
    '& .MuiBox-root:nth-of-type(4)': {
      gridColumn: '1',
      gridRow: '3 / span 2'
    },
    '& .MuiBox-root:nth-of-type(6)': {
      gridColumn: '2',
      gridRow: '3'
    },
    '& .MuiBox-root:nth-of-type(7)': {
      gridColumn: '4',
      gridRow: '1 / span 2'
    },
    '& .MuiBox-root:nth-of-type(8)': {
      gridColumn: '4',
      gridRow: '3'
    },
    '& .MuiBox-root:nth-of-type(9)': {
      gridColumn: '3',
      gridRow: '4'
    },
    '& .MuiBox-root:nth-of-type(10)': {
      gridColumn: '2',
      gridRow: '4'
    }
  }
}));

export const StyledSkeleton = styled(Skeleton)(({ theme }) => ({
  height: '100vh',
  [theme.breakpoints.up('sm')]: {
    width: '330px'
  },
  [theme.breakpoints.up('md')]: {
    width: '730px'
  },
  [theme.breakpoints.up('lg')]: {
    width: '1160px'
  }
}));
