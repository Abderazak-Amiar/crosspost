import { GridContentContainer } from '@/styled-components/styled';
import { Grid } from '@mui/material';
function Content() {
  return (
    <GridContentContainer container>
      <Grid item>Profile picture</Grid>
      <Grid item>bradcrumb</Grid>
      <Grid item>content menu</Grid>
      <Grid item>Post description</Grid>
      <Grid item>Image</Grid>
      <Grid item>Slider</Grid>
      <Grid item>Buttons</Grid>
    </GridContentContainer>
  );
}

export default Content;
