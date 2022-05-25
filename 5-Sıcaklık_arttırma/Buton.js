import React, { Component } from 'react'
import { Button } from "reactstrap";
export default class Buton extends Component {
    constructor(props){
        super(props);

        this.state={
           Degerler: [{Cdeger:10}]
        };
    }
  render() {
    return (
      <div>
        
      {this.state.Degerler.map(a =>(
        
        <Button onClick={()=>this.props.SıcaklıkDegistir(a)}>{a.Cdeger}</Button>
      ))}
      
        
      
      
    </div>
    )
  }
}