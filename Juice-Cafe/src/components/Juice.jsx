import React, { Component } from 'react'

export class Juice extends Component {
  render() {
      const {image,name,desc,status,price} = this.props.details;
    return (
        <li className='menu-fish'>
            <img src={image} alt={`image of a ${name}`}/>
            <h3 className="fish-name">{name}
            <span> Rs {price}</span>
            </h3>
            <p>{desc}</p>
            <button>Add this</button>
        </li>
    )
  }
}

export default Juice
