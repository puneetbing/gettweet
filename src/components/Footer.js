import React from 'react';
import Paper from '@material-ui/core/Paper';
import './Footer.css';
 
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  }
});
 
const Footer = props => {


    return (
            <Paper elevation={1}>
            <footer id="gt-footer" class="footer-1">
              <div class="main-footer widgets-dark typo-light">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="widget subscribe no-box">
                        <h5 class="widget-title">About<span></span></h5>
                        <p>getTweet.in does not host any pirated or copyright content on its server, open APIs offered by twitter are used to fetch
                          the content of a tweet. Content of each tweet is maintained by twitter.com and this website just fetches the relevant links.
                        </p>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="widget no-box">
                        <h5 class="widget-title">Quick Links<span></span></h5>
                        <ul class="thumbnail-widget">
                          <li>
                            <div><a class="gt-footer-link" href="/privacy">Privacy Policy</a></div>
                          </li>
                          <li>
                            <div><a class="gt-footer-link" href="/cookie">Cookie Policy</a></div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="widget no-box">
                        <h5 class="widget-title">Contact Us<span></span></h5>
                        <p>
                          <a class="gt-footer-link" href="mailto:mount.refidim@gmail.com" target="_blank" title="glorythemes">
                            mount.refidim@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="footer-copyright">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12 text-center gt-share-icons">
                      <p>
                             
                        <ul>
                          <li>
                            Copyright getTweet &copy; 2020. All rights reserved. 
                          </li>
                          <li>
                            <a data-pin-do="buttonBookmark" data-pin-round="true" href="https://www.pinterest.com/pin/create/button/">
                              <img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_round_red_16.png" />
                            </a>
                          </li>
                          <li>
                          <div class="fb-share-button" 
                          data-href="https://www.your-domain.com/your-page.html" 
                          data-layout="button_count"></div>

                          </li>
                          <li>
                            <script type="IN/Share" data-url="https://www.linkedin.com"></script>
                          </li>
                          <li>
                            <a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=Download any video/gif using https://gettweet.in">Tweet</a>
                          </li>
                        </ul>      
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </footer>
            </Paper>
    );
}

export default Footer;