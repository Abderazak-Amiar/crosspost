'use client';
import { ReactNode, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Cover from './Cover/Cover';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: Readonly<TabPanelProps>) {
  const { children, value, index, ...other } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsPanel() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid>
      <Grid item md={4} sx={{ margin: 'auto' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
        >
          <Tab label="Cover" {...a11yProps(0)} />
          <Tab label="Profile grid" {...a11yProps(1)} />
        </Tabs>
      </Grid>
      <Grid item>
        <CustomTabPanel value={value} index={0}>
          <Cover />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Typography variant="body1">Profile grid</Typography>
        </CustomTabPanel>
      </Grid>
    </Grid>
  );
}
