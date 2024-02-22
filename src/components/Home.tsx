import { GridHomeContent } from '@/styled-components/styled';
import { Grid } from '@mui/material';
import React from 'react';
import SideMenu from './SideMenu';
import Header from './Header';

function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Grid container>
      <Grid item md={3}>
        <SideMenu />
      </Grid>
      <Grid item md={9} sx={{ width: '80% !important' }}>
        <GridHomeContent container>
          <Grid item>
            <Header />
          </Grid>
          <Grid item>{children}</Grid>
        </GridHomeContent>
      </Grid>
    </Grid>
  );
}

export default Home;
