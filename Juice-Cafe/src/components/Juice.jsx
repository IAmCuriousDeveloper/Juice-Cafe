import React, { Component } from "react";
import PropTypes from "prop-types";

class Juice extends Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      desc: PropTypes.string,
      status: PropTypes.string
    }),
    addToOrder: PropTypes.func
  };
  render() {
    const { image, name, desc, status, price } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className='menu-fish'>
        <img src={image} alt={`image of a ${name}`} />
        <h3 className='fish-name'>
          {name}
          <span> Rs {price}</span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          {status === "available" ? "Addthis" : "unavailable"}
        </button>
      </li>
    );
  }
}

export default Juice;
