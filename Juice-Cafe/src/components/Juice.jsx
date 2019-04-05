import React, { Component } from "react";

export class Juice extends Component {
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
        <button disabled={!isAvailable}>
          //using the ternary just for the unavailable animation
          {status === "available" ? "Addthis" : "unavailable"}
        </button>
      </li>
    );
  }
}

export default Juice;
