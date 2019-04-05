import React, { Component } from "react";
import AddJuiceForm from "./AddJuiceForm";

class Inventory extends Component {
  render() {
    return (
      <div className='inventory'>
        <h2>Inventory</h2>
        <AddJuiceForm addJuice={this.props.addJuice} />
        <button onClick={this.props.loadSampleJuices}> Load Our Menu </button>
      </div>
    );
  }
}

export default Inventory;
