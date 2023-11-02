import { Components, Theme } from '@mui/material';

export const MuiIconButtonConfig: Components<Theme>['MuiIconButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      border: theme.palette.primary.main,
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: 'none',
        border: 'none'
      },
      '&:active': {
        backgroundColor: 'none',
        border: 'none'
      }
    }),
    colorPrimary: ({ theme }) => ({
      padding: theme.spacing(1, 1.4),
      borderRadius: 30,
      backgroundColor: theme.palette.primary.main,
      border: theme.palette.primary.main,
      boxShadow: `2px 2px 0px 0px ${theme.palette.text.secondary}`,
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
        border: theme.palette.action.hover
      },
      '&:active': {
        backgroundColor: theme.palette.action.selected,
        border: theme.palette.action.selected
      }
    }),
    colorSecondary: ({ theme }) => ({
      padding: theme.spacing(0.8, 3.5),
      borderRadius: 6,
      backgroundColor: theme.palette.grey[300],
      boxShadow: `3px 3px 0px 0px ${theme.palette.text.secondary}`,
      border: `0.6px solid ${theme.palette.common.black}`,
      transition: 'box-shadow .2s ease',
      '&:hover': {
        boxShadow: `3px 3px 0px 0px ${theme.palette.warning.main}`,
        border: `1px solid ${theme.palette.warning.main}`,
        backgroundColor: 'transparent',
        outline: 'none'
      },
      '&:active, &:focus': {
        backgroundColor: theme.palette.warning.main,
        boxShadow: `3px 3px 0px 0px ${theme.palette.text.secondary}`,
        border: `1px solid ${theme.palette.text.secondary}`
      }
    })
  },
  defaultProps: {
    disableRipple: true
  }
};
