import React, { Component } from "react";

class Juice extends Component {
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
