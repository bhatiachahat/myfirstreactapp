import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props)

   
    this.initialState={
        name:'',
        job:''
    }
    this.state=this.initialState;
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit=this.handleSubmit.bind(this);
}
handleChange=(event)=>{
   console.log("event.target.value",event.target.value);
   

    this.setState({
        [event.target.name]:event.target.value.toUpperCase()
       
        
    })
  

}
submitForm = (event) => {
    event.preventDefault();
    console.log("in submit form",this.state);
    console.log("before calling handlesubmit");
    this.props.handleSubmit(this.state)
    console.log("afetr calling handle submit");
   this.setState(this.initialState)
  console.log("cleared");
  }

    render() {
     
        return (
            
            <form onSubmit={this.submitForm}>
               <div className="form-group">
    <label for="exampleInputEmail1">Name of the employee</label>
    <input autofocus="on" autocomplete="off" type="text" className="form-control" name="name"
              value={this.state.name}
              onChange={this.handleChange} placeholder="Type Name" />
    
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Employee designation</label>
    <input autocomplete="off" type="text" className="form-control" name="job"
              value={this.state.job}
              onChange={this.handleChange} placeholder="Type designation" />
    
  </div>
  
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
           
        )
    }
}
