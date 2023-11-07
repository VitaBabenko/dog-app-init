import { Stack, Typography, IconButton, SvgIcon } from '@mui/material';
import IconUpFilter from '../../../assets/icons/IconUpFilter.svg?react';
import IconDownFilter from '../../../assets/icons/IconDownFilter.svg?react';
import IconRandomFilter from '../../../assets/icons/IconRandomFilter.svg?react';

export const SortingWrap = () => (
  <Stack direction="row" spacing={2}>
    <Typography color="#ADA7B8">Sort by:</Typography>
    <IconButton color="secondary" sx={{ width: 58, height: 36 }}>
      <SvgIcon
        component={IconUpFilter}
        inheritViewBox
        sx={{ width: 17, height: 20 }}
      />
    </IconButton>
    <IconButton color="secondary" sx={{ width: 58, height: 36 }}>
      <SvgIcon
        component={IconDownFilter}
        inheritViewBox
        sx={{ width: 17, height: 20 }}
      />
    </IconButton>
    <IconButton color="secondary" sx={{ width: 58, height: 36 }}>
      <SvgIcon
        component={IconRandomFilter}
        inheritViewBox
        sx={{ width: 17, height: 20 }}
      />
    </IconButton>
  </Stack>
);
