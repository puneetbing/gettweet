import React from 'react';
import Typography from '@material-ui/core/Typography';
import './Howto.css';
import Slide from '@material-ui/core/Slide';

const ChromeExtension = () => {
    return (
        <Slide 
            direction="left" 
            in={true} 
            mountOnEnter 
            unmountOnExit
        >
            <div className="howto">
                <Typography variant="h5" component="h5">
                    Download the extension, and start downloading with a single click ! :)
                    <hr/>
                </Typography>
                <ol>
                <li>
                    Download the extension from here :  
                    <a href="https://chrome.google.com/webstore/detail/twitter-based-videogif-do/ofkileplaebncapjieeccfabeakdfffa" rel="noopener noreferrer" target="_blank">
                        <img alt="Chrome Extesnion badge for chrome webstore"src="/images/extension.png"></img>
                    </a>
                </li>
                <li>
                    Click on the download button placed by the extension. It will appear near the name of the person who tweeted the content.
                    <img className="gt-extension" alt="Getting vide/gif url using method 1"src="/images/screen1.png"></img>
                </li>
                <li>
                    Choose the size of the video/gif and click on download.
                    <img className="gt-extension" alt="Getting vide/gif url using method 2"src="/images/screen2.png"></img>
                </li>
                </ol>
            </div>
        </Slide>
    );
};

export default ChromeExtension;