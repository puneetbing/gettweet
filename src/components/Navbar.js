import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Howto from "./Howto";
import ChromeExtension from "./ChromeExtension";
import Search from "./Search";
import HomeOutlinedIcon from "@material-ui/icons/Home";
import ExtensionIcon from '@material-ui/icons/Extension';
import Container from "@material-ui/core/Container";
import HelpIcon from "@material-ui/icons/Help";
import "./NavBar.css";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import Footer from "./Footer";
import Privacy from "./Privacy";
import CookiePolicy from "./CookiePolicy";

const AntTabs = withStyles({
  indicator: {
    backgroundColor: "#3f51b5",
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

var direction = "left";

const Navbar = (props) => {
  const classes = useStyles();
  const routeMap = {
    "/": <Search />,
    "/howto": <Howto direction={direction}/>,
    "/extension": <ChromeExtension />,
    "/privacy": <Privacy />,
    "/cookie": <CookiePolicy />,
  };
  const routeList = Object.keys(routeMap);
  const [selectedTab, setSelectedTab] = useState(routeList.indexOf(window.location.pathname));

  const pageComponent = (route) => {
    return routeMap[route];
  };

  const navBarStyle = {
    background: "#50a6d8",
  };

  const handleChange = (event, newValue) => {
    const oldIndex = routeList.indexOf(window.location.pathname);
    direction = oldIndex < newValue ? "left" : "right";
    props.history.push(routeList[newValue]);
    setSelectedTab(newValue);
  };
  const logoClicked = (e) => {
    setSelectedTab(0);
    props.history.push("/");
  };

  if (!routeMap[window.location.pathname]) {
    window.location.pathname = "/";
  }
  return (
    <div>
      <AppBar
        height={200}
        className="gt-navbar"
        position="static"
        style={navBarStyle}
      >
        <Container>
          <Toolbar>
            <Typography
              variant="h5"
              onClick={logoClicked}
              className={classes.title + " gt-logo-container"}
            >
              <span className="gt-logo-text">
                <span>get</span>
                <span class="gt-logo">
                  t<GetAppRoundedIcon fontSize="large" />
                </span>
                <span class="gt-logo-weet">&nbsp;weet</span>
              </span>
            </Typography>
            <AntTabs
              variant="fullWidth"
              value={selectedTab}
              onChange={handleChange}
              aria-label="getTweet tabs"
              indicatorColor="secondary"
            >
              <Tab
                className="ui-tab"
                icon={
                  <HomeOutlinedIcon
                    color="disabled"
                    style={{ marginRight: "10px" }}
                  />
                }
                label="Home"
              />
              <Tab
                className="ui-tab"
                icon={
                  <HelpIcon color="disabled" style={{ marginRight: "10px" }} />
                }
                label="How to"
              />
              <Tab className="ui-tab" icon={<ExtensionIcon color="disabled"/>} label="Chrome Extension" />
            </AntTabs>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="md">
        <Typography component="div" className="gt-main-container">
          {pageComponent(window.location.pathname)}
        </Typography>
      </Container>
      <Footer />
    </div>
  );
};
export default Navbar;
