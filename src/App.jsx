import React, { Component } from 'react';
import { Header, Logo } from './Components/Header';
import Footer from './Components/Footer';
import BasicTextFields from './Components/TextField'
import  './App.css'

class App extends Component{
  constructor(){
    super()
    this.state={
      name:"Baboo Kumar",
      email:"babooheerani999@gmail.com"
    }
  }

  set_name =()=>{
    console.log(this.state.name);
  }
  render(){
    return(
      <div> 
        <Header />
        
        <h2> My name is  {this.state.name}</h2>
        <h4>Email : {this.state.email}</h4>
        <input type="text" placeholder="Enter Value " />
        <button onClick={this.set_name} >Set Name</button>
        <br />
        <br />
        <Footer />
      </div>
    ) 
  }
}

export default App;