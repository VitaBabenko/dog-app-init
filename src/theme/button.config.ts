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
      padding: theme.spacing(1, 4),
      '&:hover, &:active': {
        boxShadow: 'none',
        outline: 'none'
      }
    }),
    containedPrimary: ({ theme: { palette, typography } }) => ({
      fontFamily: typography.fontFamily,
      backgroundColor: palette.primary.main,
      color: palette.primary.contrastText,
      boxShadow: `3px 3px 0px 0px ${palette.text.secondary}`,
      '&:hover': {
        backgroundColor: palette.action.hover,
        boxShadow: `3px 3px 0px 0px ${palette.text.secondary}`
      },
      '&:active, &:focus': {
        backgroundColor: palette.action.selected,
        boxShadow: `3px 3px 0px 0px ${palette.text.secondary}`
      }
    }),
    containedSecondary: ({ theme: { palette, typography } }) => ({
      fontFamily: typography.fontFamily,
      backgroundColor: palette.secondary.main,
      color: palette.secondary.contrastText,
      boxShadow: `3px 3px 0px 0px ${palette.text.secondary}`,
      '&:hover': {
        backgroundColor: palette.grey[100],
        boxShadow: `3px 3px 0px 0px ${palette.text.secondary}`
      },
      '&:active, &:focus': {
        backgroundColor: palette.grey[300],
        boxShadow: `3px 3px 0px 0px ${palette.text.secondary}`
      }
    }),
    outlinedPrimary: ({ theme: { palette, typography } }) => ({
      fontFamily: typography.fontFamily,
      backgroundColor: 'transparent',
      color: palette.primary.main,
      border: `1px solid ${palette.primary.main}`,
      boxShadow: `3px 3px 0px 0px ${palette.text.secondary}`,
      '&:hover': {
        backgroundColor: 'transparent',
        borderColor: palette.action.hover,
        boxShadow: `3px 3px 0px 0px ${palette.text.secondary}`
      },
      '&:active, &:focus': {
        borderColor: palette.action.selected,
        backgroundColor: 'transparent',
        boxShadow: `3px 3px 0px 0px ${palette.text.secondary}`
      }
    }),
    outlinedSecondary: ({ theme: { palette, typography } }) => ({
      fontFamily: typography.fontFamily,
      backgroundColor: 'transparent',
      color: palette.secondary.main,
      border: `1px solid ${palette.secondary.main} rgba(255, 255, 255, 0.50)`,
      '&:hover': {
        backgroundColor: '#FFFFFF rgba(255, 255, 255, 0.04)',
        borderColor: palette.secondary.main
      },
      '&:active, &:focus': {
        borderColor: palette.grey[300],
        backgroundColor: 'transparent'
      }
    }),
    textInherit: ({ theme: { palette, typography } }) => ({
      fontFamily: typography.fontFamily,
      color: palette.primary.contrastText,
      backgroundColor: 'transparent',
      '&:hover': {
        color: palette.warning.main,
        backgroundColor: 'transparent'
      },
      '&:active, &:focus': {
        color: palette.primary.main
      }
    }),
    textPrimary: ({ theme }) => ({
      fontFamily: theme.typography.fontFamily,
      padding: theme.spacing(1, 1.7),
      color: theme.palette.text.primary,
      backgroundColor: 'transparent',
      '&:hover': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.action.hover
      },
      '&:active, &:focus': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.secondary.contrastText,
        boxShadow: `2px 2px 0px 0px ${theme.palette.text.secondary}`
      }
    })
  },
  defaultProps: {
    disableRipple: true
  }
};
