'use client';
import { Box, Grid, Typography, styled } from '@mui/material';
import { poppins, sfPro_regular } from './fonts';

export const GridSideMenuContainer = styled(Grid)(() => ({
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'space-around',
  fontFamily: sfPro_regular.style.fontFamily,
  borderRight: 'solid 1px #DBDBDB',
}));

export const GridMenuContainer = styled(Grid)(() => ({
  alignItems: 'center',
  justifyContent: 'space-around',
}));

export const GridContentContainer = styled(Grid)(() => ({
  flexDirection: 'column',
}));

export const GridSideMenuLogo = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '48px',
}));

export const BoxLinksContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBlock: '24px',
}));
export const GridHomeContainer = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}));

export const TypographyPoppins = styled(Typography)(() => ({
  fontFamily: poppins.style.fontFamily,
  paddingLeft: '8px',
}));
export const TypographyMenuItems = styled(Typography)(() => ({
  paddingLeft: '8px',
}));

// export const  = styled()(() => ({

// }));
