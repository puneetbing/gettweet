import React from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
// import Alert from '@material-ui/lab/Alert';
import './Download.css';

const Download = ({tweetData}) => {

    if (Object.keys(tweetData).length === 0) {
        return null;
    }

    const renderOops = () => {
        return (
            <Typography variant="h6" component="h6">
            <span role="img" aria-label="warning emoji">⚠️</span> Oops
            <hr />
            </Typography>
            
        );
    }

    const errorText = () => {
        return (
            <div className="download-error">
                {renderOops()}
                Looks like we failed to fetch the video/gif from the url provided by you.
                <br />
                It can happen because: 
                    <ol>
                        <li>The url provided by you doesn't contain a downloadable media.</li>
                        <li>Some server side issue caused this inconvenience.</li>
                    </ol>
                We have logged this event to recitfy the issues which might have occured.
            </div>
        );
    }

    const fatalErrorText = () => {
        return (
            <div className="download-error">
                {renderOops()}
                {tweetData.error}
            </div>
        );
    }

    if (tweetData.error) {
        if (tweetData.error.includes("FATAL")) {
            return fatalErrorText();
        }
        return errorText();
    }

    var sizeListEle = [];
    for (let size in tweetData.variants) {
        sizeListEle.push(
            <a className="download-video-btn" key={size} href={ tweetData.variants[size]['url']} target="_blank" download rel="noopener noreferrer">
                <GetAppIcon /> 
                Download [{size}]
            </a>
        );
    }

    const videoRenderEle = d => {
        return (
            <div className="download-main">
                <div className="download-sizes">
                    <div className="download-large">
                        <img alt="tweet thumbnail" src={d.thumbnail} />
                    </div>
                    <div className="download-btns">
                        {sizeListEle}
                    </div>
                </div>
            </div>
        );
    }

    return (
            <Zoom in={true}>
                {videoRenderEle(tweetData)}
            </Zoom>
    );
};

export default Download;