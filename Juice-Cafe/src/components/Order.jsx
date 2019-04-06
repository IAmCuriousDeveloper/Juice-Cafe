import React, { Component } from "react";

export class Order extends Component {
  renderOrder = key => {
    const juice = this.props.juices[key];
    const count = this.props.order[key];
    const isAvailable = juice && juice.status === "available";
    //making sure that juice is available from the firebase
    if (!juice) return null;
    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry {juice ? juice.name : "juice"} is no longer available
        </li>
      );
    }
    return (
      <li key={key}>
        {count} qty {juice.name}
        {count * juice.price}
      </li>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const juice = this.props.juices[key];
      const count = this.props.order[key];
      const isAvailable = juice && juice.status === "available";
      if (isAvailable) {
        return prevTotal + count * juice.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className='order-wrap'>
        <h2>order</h2>
        <ul className='order'>{orderIds.map(this.renderOrder)}</ul>
        <div className='total'>
          Total:
          <strong>Rs {total}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
