import {
  BoxLinksContainer,
  TypographyMenuItems,
} from '@/styled-components/styled';
import { sideMenuItemPropsType } from '@/utils/types';
import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function SideMenuItem(props: sideMenuItemPropsType) {
  const { item } = props;
  return (
    <BoxLinksContainer>
      <Box>
        <Link href="/">
          <Image
            src={`icons/${item.icon}.svg`}
            width={22}
            height={22}
            alt="Logo"
          />
        </Link>
      </Box>
      <Box>
        <Link href="/">
          <TypographyMenuItems variant="body1">{item.text}</TypographyMenuItems>
        </Link>
      </Box>
    </BoxLinksContainer>
  );
}

export default SideMenuItem;
