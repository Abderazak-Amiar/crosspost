import {
  GridMenuContainer,
  GridSideMenuContainer,
  GridSideMenuLogo,
  TypographyPoppins,
} from '@/styled-components/styled';
import { menu_items } from '@/utils/const';
import { Grid } from '@mui/material';
import Image from 'next/image';
import SideMenuItem from './SideMenuItem';
function SideMenu() {
  return (
    <GridSideMenuContainer container>
      <Grid item>
        <GridMenuContainer container>
          <GridSideMenuLogo item md={6}>
            <Image src="images/logo.svg" width={43} height={43} alt="Logo" />
            <TypographyPoppins variant="h4">crosspost</TypographyPoppins>
          </GridSideMenuLogo>
        </GridMenuContainer>
      </Grid>
      <Grid item>
        <GridMenuContainer container>
          <Grid item md={6}>
            {menu_items.map((item, index) => (
              <SideMenuItem key={`item_${index}`} item={item} />
            ))}
          </Grid>
        </GridMenuContainer>
      </Grid>
      <Grid item>
        <GridMenuContainer container>
          <Grid item md={6}>
            <SideMenuItem item={{ icon: 'settings', text: 'Settings' }} />
          </Grid>
        </GridMenuContainer>
      </Grid>
    </GridSideMenuContainer>
  );
}

export default SideMenu;
