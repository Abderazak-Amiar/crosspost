'use client';
import {
  GridHeaderContainer,
  GridHeaderPicture,
} from '@/styled-components/styled';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

function Header() {
  const currentRoute = usePathname();
  return (
    <GridHeaderContainer container spacing={0}>
      <GridHeaderPicture item>
        <Image src="images/logo.svg" width={43} height={43} alt="Logo" />
      </GridHeaderPicture>
      <Grid item>
        <Typography variant="h4">{currentRoute}</Typography>
      </Grid>
    </GridHeaderContainer>
  );
}

export default Header;
