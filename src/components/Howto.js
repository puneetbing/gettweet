import React from 'react';
import Typography from '@material-ui/core/Typography';
import './Howto.css';
import Slide from '@material-ui/core/Slide';

const Howto = ({direction}) => {
    return (
        <Slide 
            direction={direction}
            in={true} 
            mountOnEnter 
            unmountOnExit
        >
            <div className="howto">
                <Typography variant="h5" component="h5">
                    Download any video/gif in 3 easy steps 
                    <hr/>
                </Typography>
                <ol>
                <li>Navigate to <a href="https://twitter.com/home" rel="noopener noreferrer" target="_blank">twitter</a></li>
                <li>Now here we have two options : 
                    <br/>
                    <ul>
                        <li>
                        Open the tweet contaning the content and copy the url from the browser. 
                        <img alt="Getting vide/gif url using method 1"src="/images/m1.jpg"></img>
                        </li>
                        <li>
                        Right click on the video and copy the address.
                        <img alt="Getting vide/gif url using method 2"src="/images/m2.jpg"></img>
                        </li>
                    </ul>
                    
                </li>
                <li>
                    Paste the link in the search section and click 'SEARCH'.
                </li>
                </ol>
            </div>
        </Slide>
    );
};

export default Howto;