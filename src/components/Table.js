import React, { Component } from 'react'
import Tableheader from './Tableheader'
import Tablebody from './Tablebody'

export default class Table extends Component {
    
    render() {
        
        console.log(this.props.data);
        var characterData=this.props.data;
        var removeCharacter=this.props.removeCharacter;
       
        return (
            <table class="table">
  <Tableheader />
  <Tablebody characterData={characterData} removeCharacter={removeCharacter} />
  
</table>
           
        )
    }
}
