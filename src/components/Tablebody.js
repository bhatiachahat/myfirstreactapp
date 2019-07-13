import React, { Component } from 'react'

export default class Tablebody extends Component {
    render() {
        var characterData=this.props.characterData;
    
         let array=characterData.map((row,index)=>{
       
            return (
            
    
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button  class="btn btn-primary" onClick={
                        ()=>{this.props.removeCharacter(index)}
                    }>Delete

                    </button>
                </td>
              </tr>
           
           
            )
        
   })
    return(
    <tbody>{array}</tbody>
)
       
    }
   
}
