import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import LinkIcon from '@material-ui/icons/Link';
import Button from '@material-ui/core/Button';
import Download from './Download';
import gettweet from '../apis/gettweet';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Search.css';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    margin: {
      margin: theme.spacing(2),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '15ch',
    },
  }));
const params = new URLSearchParams(window.location.search);

const Search = () => {
    const classes = useStyles();
    const [errorMode, setErrorMode] = useState(false);
    const [url, setUrl] = useState("");
    const [tweetData, setTweetData] = useState({});
    const [spinner, showSpinner] = useState(false);

    const labelClassList = errorMode ? "gt-label error" : "gt-label";
    const labelWidth = errorMode ? 85 : 137;
    const searchLabel = errorMode ? "Invalid URL" : "Place the URL here";
    const showDownloadComponent = !spinner;

    const validateUrl = val => { return /^(?:(?:(?:https?):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(val);}

    const getTweetData = tweet_data => {
      try {
        const preloaded_tweet_data = JSON.parse(atob(tweet_data));
        if (JSON.stringify(preloaded_tweet_data) !== JSON.stringify(tweetData)) {
          setTweetData(preloaded_tweet_data);
        }
      } catch(err) {
        setTweetData({
          error: '[FATAL] Server Error, this incidents has been reported. Apologies for the inconvenience.'
        });
      }
    }

    if (params.has('tweet_data')) {
      getTweetData(params.get('tweet_data'));
    }

    const searchTweet = async status_url => {
      try {
        const resp = await gettweet.post("/fetch", {status_url});
        setTweetData(resp.data);
      } catch(err) {
        setTweetData({
          error: '[FATAL] Server Error, this incident has been reported. Apologies for the inconvenience.'
        });
      }
      showSpinner(false);
    };

    const showSampleTweetLink = e => {
      const sampleLink = 'https://twitter.com/i/status/1290799617882431488';
      document.getElementById("tweet-link").value = sampleLink;
      setUrl(sampleLink);
    };

    const handleOnSubmit = e => {
      e.preventDefault();
      const isInvalid = !validateUrl(url);
      if (isInvalid) {
        return setErrorMode(isInvalid);
      }
      setErrorMode(isInvalid);
      searchTweet(url);
      showSpinner(true);
    }

    return (
      <>
          <Typography variant="h4" className="gt-banner" component="h2">
              Download video/gif from Twitter
          </Typography>
          <form id="gt-form" onSubmit={handleOnSubmit}>
              <FormControl 
                  fullWidth 
                  className={classes.margin} 
                  variant="outlined"
              >
                  <InputLabel htmlFor="tweet-link" className={labelClassList}>{searchLabel}</InputLabel>
                  <OutlinedInput
                      id="tweet-link"
                      onChange = {e => {setUrl(e.target.value)}}
                      startAdornment={<InputAdornment position="start">
                              <LinkIcon color="disabled" />:
                          </InputAdornment>}
                      labelWidth={labelWidth}
                      autoFocus={true}
                      inputProps = {{'aria-label': 'Place the URL here'}}
                      error={errorMode}
                  />
                  <div className={classes.root}>
                      <Button 
                          className="gettweet-search-btn" 
                          variant="contained" 
                          style = {{ backgroundColor: "#50a6d8", color: "#f4f4f4"}}
                          onClick = {handleOnSubmit}
                      >
                          SEARCH
                      </Button>
                  </div>
              </FormControl>
              <div className="gt-example">
                <input 
                  type="button" 
                  onClick = {showSampleTweetLink} 
                  className="gt-example-btn" 
                  name="example_gif" 
                  value="See sample video"
                />
              </div>
          </form>

          
          {spinner && <CircularProgress className="gt-spinner" color="inherit" />}
          {showDownloadComponent && <Download tweetData = {tweetData} />}
        
        </>
      );
};

export default Search;