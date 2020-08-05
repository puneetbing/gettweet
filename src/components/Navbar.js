import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Howto from './Howto';
import ChromeExtension from './ChromeExtension';
import Search from './Search';
import HomeOutlinedIcon from '@material-ui/icons/Home';
import ExtensionIcon from '@material-ui/icons/Extension';
import Container from '@material-ui/core/Container';
import HelpIcon from '@material-ui/icons/Help';
import './NavBar.css';

const AntTabs = withStyles({
  indicator: {
    backgroundColor: '#fff44f',
  },
})(Tabs);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const routeMap = {
  '/' : <Search />,
  '/howto' : <Howto />,
  '/extension' : <ChromeExtension />,
};

const tabMap = ["/", "/howto", "/extension"];

const Navbar = props => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  const pageComponent = route => {
    return routeMap[route];
  };

  const handleChange = (event, newValue) => {
    props.history.push(tabMap[newValue]);
    setSelectedTab(newValue);
  };

  if (!routeMap[window.location.pathname]) {
    window.location.pathname="/";
  }
  
  const currentRoute = tabMap[selectedTab];
  return (
    <div>
      <AppBar height={200} position="static" style={{ background: '#e53935' }}>
      <Container>
        <Toolbar >
        
            <Typography variant="h6" className={classes.title}>
              getTweet
            </Typography>
            <AntTabs 
            variant='fullWidth' 
            value={selectedTab} 
            onChange={handleChange} 
            aria-label="getTweet tabs"
            indicatorColor="secondary"

          >
            <Tab className="ui-tab" icon={<HomeOutlinedIcon color="disabled" style={{marginRight: "10px"}}/>} label="Home"  />
            <Tab className="ui-tab" icon={<HelpIcon color="disabled" style={{marginRight: "10px"}}/>} label="How to" />
            <Tab className="ui-tab" icon={<ExtensionIcon color="disabled"/>} label="Chrome Extension" />
          </AntTabs>
          
        </Toolbar>
        </Container>
      </AppBar>
      {pageComponent(currentRoute)}
    </div>
  );
}
export default Navbar;