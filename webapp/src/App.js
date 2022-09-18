import React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
//import Typography from '@mui/joy/Typography';
//import Sheet from '@mui/joy/Sheet';
//import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
//import Link from '@mui/joy/Link';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import TabPanel from '@mui/joy/TabPanel';
import Tab from '@mui/joy/Tab';
import Main from './components/Main';
import About from './components/About';
import Location from './components/Location';

const ModeToggle = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      style={{ marginLeft: 3 }}
      variant="outlined"
      onClick={() => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
      }}
    >
      {mode === 'light' ? <Brightness5Icon /> : <DarkModeIcon />}
    </Button>
  );
};

function App() {
  return <CssVarsProvider>

    <Tabs style={{ marginLeft: 5, marginRight: 5 , marginTop:15, marginBotton:15 }} defaultValue={1}>
      <TabList>

        <Tab value={1}>Odonto Brasil</Tab>
        <Tab value={2}>Onde Estamos</Tab>
        <Tab value={3}>Sobre Nós</Tab>
        <ModeToggle />
      </TabList>
      <TabPanel value={1}>

        <Main/>
      </TabPanel>
      <TabPanel value={2}>
        
        <Location/>
      </TabPanel>
      <TabPanel value={3}>
        <About/>
      </TabPanel>
    </Tabs>

  </CssVarsProvider>;
}

export default App;
