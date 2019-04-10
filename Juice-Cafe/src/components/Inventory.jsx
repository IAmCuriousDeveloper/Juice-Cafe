import React, { Component } from "react";
import AddJuiceForm from "./AddJuiceForm";
import EditFishForm from "./EditFishForm";
import PropTypes from "prop-types";

class Inventory extends Component {
  static propTypes = {
    juices: PropTypes.object,
    updateJuice: PropTypes.func,
    deleteJuice: PropTypes.func,
    addJuice: PropTypes.func,
    loadSampleJuices: PropTypes.func
  };
  render() {
    return (
      <div className='inventory'>
        <h2>Inventory</h2>
        {Object.keys(this.props.juices).map(key => (
          <EditFishForm
            index={key}
            updateJuice={this.props.updateJuice}
            key={key}
            juice={this.props.juices[key]}
            deleteJuice={this.props.deleteJuice}
          />
        ))}
        <AddJuiceForm addJuice={this.props.addJuice} />
        <button onClick={this.props.loadSampleJuices}> Load Our Menu </button>
      </div>
    );
  }
}

export default Inventory;
