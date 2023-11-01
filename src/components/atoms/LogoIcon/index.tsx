import { SvgIcon, Link as LinkLogo, styled } from '@mui/material';

import IconLogo from '../../../assets/icons/LogoIcon.svg?react';

const Link = styled(LinkLogo)({
  underline: 'none'
});

export const LogoIcon = () => (
  <Link href="/">
    <SvgIcon
      component={IconLogo}
      sx={{ width: 201, height: 40 }}
      inheritViewBox
    />
  </Link>
);
