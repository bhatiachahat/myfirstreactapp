
import React, { Component } from 'react'
import Table from './components/Table'
import Form from './components/Form'
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    
    this.state={
      character:[]
    }
  }
  removeCharacter=index=>{
   
    
    
    console.log(index);
    console.log("inside remove character");
   let newarray=this.state.character;
  let newcharacters= newarray.filter((character, i) => {
        return i !== index
      })
    this.setState({ character:newcharacters  }, () => {
      console.log(this.state.character);
    }); 
   }
   handleSubmit=(character)=>{

  
   
    console.log("inside onSubmit",character);

    console.log("initial charcters",this.state.character);
    this.setState({ character: [...this.state.character, character]  }, () => {
        console.log("final characters",this.state.character);
      }); 
 

}
   
  render() {
    return (
      <div className="container">
         <h1>All Employees</h1>
        
         <Table data={this.state.character} removeCharacter={this.removeCharacter}/>
         
       
        <br/>
        <hr/>
        <h1>Add New Employee</h1>
        <div class="jumbotron">
        <Form   handleSubmit={this.handleSubmit} />
        </div>
       
        
      </div>
    )
  }
}

