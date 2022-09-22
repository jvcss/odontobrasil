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
import { Typography } from '@mui/material';

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
    <Tabs style={{ 
     // marginLeft: 5, marginRight: 5 , marginTop:8, marginBotton:8,
      minWidth: "270px"}} defaultValue={1}>
        <ModeToggle />
      <TabList sx={{minWidth: "270px"}}>
        <Tab value={1}><Typography variant='body1' sx={{
          textColor: "#ddd9ce",
          textAlign: "center",
          margin: "1px",
          fontFamily: 'Tangerine',
          fontSize: "30px",
          textShadow: "4px 4px 4px #8b8b88",
          fontWeight: "lighter"
        }}>Odonto Brasil</Typography></Tab>
        <Tab value={2}><Typography variant='body1' sx={{
          textColor: "#ddd9ce",
          textAlign: "center",
          margin: "1px",
          fontFamily: 'Tangerine',
          fontSize: "30px",
          textShadow: "4px 4px 4px #8b8b88",
          fontWeight: "lighter"
        }}>Onde Estamos</Typography></Tab>
        <Tab value={3}><Typography variant='body1' sx={{
          textColor: "#ddd9ce",
          textAlign: "center",
          margin: "1px",
          fontFamily: 'Tangerine',
          fontSize: "30px",
          textShadow: "4px 4px 4px #8b8b88",
          fontWeight: "lighter"
        }}>Sobre Nós</Typography></Tab>
        
      </TabList>
      <TabPanel value={1} sx={{height:"100vh"}}>
        <Main/>
      </TabPanel>
      <TabPanel value={2}>
        
        <Location/>
      </TabPanel>
      <TabPanel value={3}sx={{height:"100vh"}}>
        <About/>
      </TabPanel>
    </Tabs>
  </CssVarsProvider>;
}

export default App;
