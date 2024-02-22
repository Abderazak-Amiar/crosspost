import { GridContentContainer } from '@/styled-components/styled';
import { Grid } from '@mui/material';
import TabsPanel from './TabsPanel';
function Content() {
  return (
    <GridContentContainer container>
      <Grid item>
        <TabsPanel />
      </Grid>
    </GridContentContainer>
  );
}

export default Content;
