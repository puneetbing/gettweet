import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Howto from './Howto';
import ChromeExtension from './ChromeExtension';
import Search from './Search';
import HomeOutlinedIcon from '@material-ui/icons/Home';
// import ExtensionIcon from '@material-ui/icons/Extension';
import Container from '@material-ui/core/Container';
import HelpIcon from '@material-ui/icons/Help';
import DescriptionIcon from '@material-ui/icons/Description';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import './NavBar.css';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

const AntTabs = withStyles({
  indicator: {
    backgroundColor: '#3f51b5',
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
  '/privacypolicy': <div> Some Policy</div>
};

const tabMap = ["/", "/howto", "/extension", "/privacypolicy"];

const Navbar = props => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);
  const [containerHeight, setContainerHeight] = useState('92vh');

  const pageComponent = route => {
    return routeMap[route];
  };

  const innerContainerStyle = {
    backgroundColor: '#f4f4f4',
    height: containerHeight,
    paddingLeft: "25px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden"
  }

  const navBarStyle = {
    background: '#50a6d8'
  }

  const handleChange = (event, newValue) => {
    props.history.push(tabMap[newValue]);
    if (newValue === 1 ){
      setContainerHeight('152vh');
    } else {
      setContainerHeight('92vh');
    }
    setSelectedTab(newValue);
  };

  if (!routeMap[window.location.pathname]) {
    window.location.pathname="/";
  }
  
  const currentRoute = tabMap[selectedTab];
  return (
    <div>
      <AppBar height={200} className="gt-navbar" position="static" style={navBarStyle}>
      <Container>
        <Toolbar >
        
            <Typography variant="h5" className={classes.title + ' gt-logo-container'}>
              <span className="gt-logo-text">
                <span>get</span>
                <span class="gt-logo">t<GetAppRoundedIcon fontSize='large'/></span>
                <span class="gt-logo-weet" >&nbsp;weet</span>
              </span>
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
            {/* <Tab className="ui-tab" icon={<ExtensionIcon color="disabled"/>} label="Chrome Extension" /> */}
          </AntTabs>
          
        </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="md">
        <Typography component="div" style={innerContainerStyle} >
            {pageComponent(currentRoute)}
        </Typography>
      </Container>
      <BottomNavigation 
        value={selectedTab} 
        onChange={handleChange} 
        className={classes.root}
        showLabels
        style={navBarStyle}
      >
                    <Tab className="ui-tab " label="Privacy Policy" value="privacypolicy" icon={<DescriptionIcon className="gt-doc-icon" color="active"/>} /> />
            {/* <Tab className="ui-tab" icon={<HelpIcon color="disabled" style={{marginRight: "10px"}}/>} label="How to" /> */}
        {/* <BottomNavigationAction label="Privacy Policy" value="privacypolicy" icon={<DescriptionIcon color="disabled"/>} /> */}
      </BottomNavigation>
    </div>
  );
}
export default Navbar;