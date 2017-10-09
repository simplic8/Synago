import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="header-space"></div>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
