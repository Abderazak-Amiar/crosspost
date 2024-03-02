'use client';
import {
  GridHeaderContainer,
  GridHeaderPicture,
  HeaderGridRoute,
} from '@/styled-components/styled';
import { Grid, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FaceIcon from '@mui/icons-material/Face';
import Link from 'next/link';
function Header() {
  const currentRoute = usePathname();
  return (
    <GridHeaderContainer container spacing={0}>
      <GridHeaderPicture item>
        <IconButton
          sx={{
            color: ' #00000050',
            margin: '8px',
            '&:hover': { background: '#ffffff00' },
          }}
        >
          <FaceIcon fontSize="large" />
          <KeyboardArrowDownIcon />
        </IconButton>
      </GridHeaderPicture>
      <HeaderGridRoute item>
        <Link href="/">{currentRoute !== '/' && <ArrowBackIosIcon />}</Link>
        <Typography variant="h4">{currentRoute.replace('/', '')}</Typography>
      </HeaderGridRoute>
    </GridHeaderContainer>
  );
}

export default Header;
