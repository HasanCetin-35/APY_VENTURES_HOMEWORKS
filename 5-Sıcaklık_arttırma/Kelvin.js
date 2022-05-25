import React, { Component } from 'react'
export default class Kelvin extends Component {
   
  render() {
    return (
      <div>
      
      <h3>Kelvin:{-273.15+this.props.DegisenSıcaklık}</h3>
        
      
      
    </div>
    )
  }
}