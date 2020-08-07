import React from 'react';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
import { Route } from "react-router-dom";
// import './App.css';

const App = () => {
    return (
        <div>
            <Route exact path="/:route?" render={props => <Navbar {...props} />} />
            {/* <Route exact path="/" component = {Search} />
            <Route exact path="/howto" component = {Howto} />
            <Route exact path="/extension" component = {ChromeExtension} /> */}
        </div>

    );
}

export default App;