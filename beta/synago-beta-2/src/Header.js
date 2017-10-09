import React, { Component } from 'react';

export default class Header extends Component {

    render() {

        var styleA = {
            width:'50px', 
            textAlign:'center'
        };

        var styleB = {
            fontSize: '20px'
        };

        return (

            <div class="topbar">
                <div class="topnav" id="myTopnav">
                    <div class="topnav_logo">
                        <a href="#home"><img src="img/topnav_goforth_logo.gif" border="0" alt="GoForth Home"/></a>
                        <div style={styleA}></div>
                    </div>
                    <div class="link">
                        <a class="menulink" href="#conference">CONFERENCE</a>
                    </div>
                    <div class="link">
                        <a class="menulink" href="#movement">MOVEMENT</a>
                    </div>
                    <div class="link">
                        <a class="menulink" href="#join">JOIN</a>
                    </div>
                    <div class="link">
                        <a class="menulink" href="#signin">SIGN IN</a>
                    </div>
                    <a class="icon" href="javascript:void(0);" style={styleB} class="icon" onclick="myFunction()">&#9776;</a>
                </div>
            </div>
        );
    }
}