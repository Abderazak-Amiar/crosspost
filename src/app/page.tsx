import Content from '@/components/Content';
import SideMenu from '@/components/SideMenu';
import { GridHomeContainer } from '@/styled-components/styled';
import { Grid } from '@mui/material';
export default function Home() {
  return (
    <GridHomeContainer container>
      <Grid item md={3}>
        <SideMenu />
      </Grid>
      <Grid item md={9}>
        <Content />
      </Grid>
    </GridHomeContainer>
  );
}
