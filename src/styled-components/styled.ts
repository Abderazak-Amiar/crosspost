'use client';
import { Grid, styled } from '@mui/material';
export const GridHomeContainer = styled(Grid)(() => ({
  flexDirection: 'column',
  height: '100vh',
}));

export const GridSideMenuContainer = styled(Grid)(() => ({
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
}));

export const GridContentContainer = styled(Grid)(() => ({
  flexDirection: 'column',
}));

export const GridSideMenuLogo = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '48px',
  justifyContent: 'space-between',
}));
