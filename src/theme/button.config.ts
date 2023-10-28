import { Components, Theme } from '@mui/material';
import DosisFont from '../fonts/Dosis-VariableFont_wght.ttf';

export const MuiButtonConfig: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontFamily: ` @font-face {
        font-family: 'Dosis';
        font-style: normal;
        font-weight: 400;
        src: local('Dosis'), local('Dosis-Regular'), url(${DosisFont}) format('ttf');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }`,
      borderRadius: 10,
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 20,
      lineHeight: 'normal',
      padding: theme.spacing(1, 5),
      '&:hover, &:active': {
        boxShadow: 'none',
        outline: 'none'
      }
    }),
    containedPrimary: ({ theme: { palette, typography } }) => ({
      fontFamily: typography.fontFamily,
      backgroundColor: palette.primary.main,
      color: palette.primary.contrastText,
      boxShadow: '3px 3px 0px 0px #000',
      '&:hover': {
        backgroundColor: palette.action.hover,
        boxShadow: `3px 3px 0px 0px #000000`
      },
      '&:active': {
        backgroundColor: palette.action.selected,
        boxShadow: `3px 3px 0px 0px #000000`
      }
    }),
    containedSecondary: ({ theme: { palette } }) => ({
      backgroundColor: palette.secondary.main,
      color: palette.secondary.contrastText,
      boxShadow: `3px 3px 0px 0px #000000`,
      '&:hover': {
        backgroundColor: palette.grey[100],
        boxShadow: `3px 3px 0px 0px #000000`
      },
      '&:active': {
        backgroundColor: palette.grey[300],
        boxShadow: `3px 3px 0px 0px #000000`
      }
    }),
    outlinedPrimary: ({ theme: { palette } }) => ({
      backgroundColor: 'transparent',
      // fontFamily: 'Dosis, sans-serif',
      color: palette.primary.main,
      border: `1px solid ${palette.primary.main}`,
      boxShadow: `3px 3px 0px 0px #000`,
      '&:hover': {
        backgroundColor: 'transparent',
        borderColor: palette.action.hover,
        boxShadow: `3px 3px 0px 0px #000`
      },
      '&:active': {
        borderColor: palette.action.selected,
        backgroundColor: 'transparent',
        boxShadow: `3px 3px 0px 0px #000`
      }
    }),
    outlinedSecondary: ({ theme: { palette } }) => ({
      backgroundColor: 'transparent',
      color: palette.secondary.main,
      border: `1px solid ${palette.secondary.main} rgba(255, 255, 255, 0.50)`,
      '&:hover': {
        backgroundColor: '#FFFFFF rgba(255, 255, 255, 0.04)',
        borderColor: palette.secondary.main
      },
      '&:active': {
        borderColor: palette.grey[300],
        backgroundColor: 'transparent'
      }
    }),
    text: ({ theme: { palette } }) => ({
      color: palette.primary.contrastText,
      backgroundColor: 'transparent',
      '&:hover': {
        color: palette.warning.main,
        backgroundColor: 'transparent'
      },
      '&:active': {
        color: palette.primary.main
      }
    })
  },
  defaultProps: {
    disableRipple: true
  }
};
