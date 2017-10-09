import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default class Footer extends Component {

    render() {
        var styleCopyrights = {
            textAlign: 'center',
            fontSize: '10px',
            minHeight: 30
        };
        
        var styleRegister = {
            color: '#DC7700'
        };

        var styleJoin = {
            color: '#77BA00'
        }

        return (
            <Router>
            <Route>
            <div class="footer">
                <div class="footer-block-container">
                    <div class="footer-block">
                        <div class="footer-block-header">About GoForth</div>
                        <div class="footer-block-header-line">&nbsp;</div>
                        <div class="footer-block-link"><a href="#">What is GoForth</a></div>
                        <div class="footer-block-link"><a href="#">Strategy</a></div>
                        <div class="footer-block-link"><a href="#">Committee</a></div>
                    </div>
                    <div class="footer-block">
                        <div class="footer-block-header">Conference</div>
                        <div class="footer-block-header-line">&nbsp;</div>
                        <div class="footer-block-link"><Link to="/conf-register" style={styleRegister}>Register</Link></div>
                        <div class="footer-block-link"><Link to="/conf-highlights">Highlights</Link></div>
                        <div class="footer-block-link"><Link to="/conf-schedule">Schedule</Link></div>
                        <div class="footer-block-link"><Link to="/conf-speakers">Speakers</Link></div>
                        <div class="footer-block-link"><Link to="/conf-exhibitors">Exhibitors</Link></div>
                    </div>
                    <div class="footer-block">
                        <div class="footer-block-header">Network</div>
                        <div class="footer-block-header-line">&nbsp;</div>
                        <div class="footer-block-link"><Link to="/network-join" style={styleJoin}>Join</Link></div>
                        <div class="footer-block-link"><Link to="/network-connect">Connect / Browse</Link></div>
                    </div>                    
                    <div class="footer-block">
                        <div class="footer-block-header">Support</div>
                        <div class="footer-block-header-line">&nbsp;</div>
                        <div class="footer-block-link"><a href="#">Contact Us</a></div>
                        <div class="footer-block-link"><a href="#">FAQ</a></div>
                        <div class="footer-block-link"><a href="#">Privacy Policy</a></div>
                        <div class="footer-block-link"><a href="#">Terms & Conditions</a></div>
                    </div>
                </div>
                <div><br /></div>
                <div style={styleCopyrights}>© 2017-2018 GoForth Singapore. All Rights Reserved.</div> 
            </div>
            </Route>
            </Router>
        );     
    }
}