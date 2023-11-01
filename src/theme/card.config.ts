import { Components, Theme } from '@mui/material';

export const MuiCardConfig: Components<Theme>['MuiCard'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      position: 'relative',
      maxWidth: 570,
      minHeight: 90,
      backgroundColor: theme.palette.common.white,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }),
    containedPrimary: ({ theme: { palette } }) => ({
      boxShadow: `6px 6px 0px 0px ${palette.text.secondary}`,
      '&:hover, &:active': {
        boxShadow: `6px 6px 8px 0px ${palette.primary.main}`
      }
    }),
    containedSecondary: ({ theme: { palette } }) => ({
      boxShadow: `3px 3px 0px 0px ${palette.text.secondary}`,
      '&:hover, &:active': {
        boxShadow: `3px 3px 0px 0px ${palette.text.secondary}`
      }
    })
  }
};
