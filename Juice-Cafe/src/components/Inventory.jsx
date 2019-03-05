import React, { Component } from 'react'
import AddJuiceForm from './AddJuiceForm';

export class Inventory extends Component {
  render() {
    return (
      <div className='inventory'>
        <h2>Inventory</h2>
        <AddJuiceForm addJuice = {this.props.addJuice}/>
        <button onClick={this.props.loadSampleJuices}> Load sample juices </button>
      </div>
    )
  }
}

export default Inventory
