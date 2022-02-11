import React, { Component } from 'react';
import { Header, Logo } from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/body';
import BasicTextFields from './Components/TextField'
import  './App.css'

class App extends Component{
  render(){
    return(
      <div> 
        <Header />
        <Body />
        <br />
        <Footer />
      </div>
    ) 
  }
}

export default App;