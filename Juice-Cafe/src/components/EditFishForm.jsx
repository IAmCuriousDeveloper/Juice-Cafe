import React, { Component } from "react";
import PropTypes from "prop-types";

class EditFishForm extends Component {
  //its very handy we are using computed property names to change the
  handleChange = event => {
    //1 update the juice
    //1 traking copy of the updated fish
    const updatedJuice = {
      ...this.props.juice,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateJuice(this.props.index, updatedJuice);
    console.log(updatedJuice);
  };

  static propTypes = {
    juice: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      desc: PropTypes.string,
      status: PropTypes.string
    }),
    updateJuice: PropTypes.func,
    deleteJuice: PropTypes.func,
    index: PropTypes.string
  };

  render() {
    return (
      <div className='fish-edit'>
        <input
          type='text'
          name='name'
          onChange={this.handleChange}
          value={this.props.juice.name}
        />
        <input
          type='text'
          name='price'
          onChange={this.handleChange}
          value={this.props.juice.price}
        />
        <select
          type='text'
          name='status'
          onChange={this.handleChange}
          value={this.props.juice.status}
        >
          <option value='available'>Fresh</option>
          <option value='unavailable'>Sold Out</option>
        </select>
        <textarea
          onChange={this.handleChange}
          name='desc'
          cols='30'
          rows='10'
          value={this.props.juice.desc}
        />
        <input
          type='text'
          name='image'
          onChange={this.handleChange}
          value={this.props.juice.image}
        />
        <button onClick={() => this.props.deleteJuice(this.props.index)}>
          Remove Item{" "}
        </button>
      </div>
    );
  }
}

export default EditFishForm;
