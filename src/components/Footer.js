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
        <footer >
            <Paper elevation={1}>
            <footer id="footer" class="footer-1">
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
                    <div class="col-md-12 text-center">
                      <p>
                        Copyright getTweet &copy; 2020. All rights reserved.            
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            </Paper>

        </footer>
    );
}

export default Footer;