import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export class Order extends Component {
  renderOrder = key => {
    const juice = this.props.juices[key];
    const count = this.props.order[key];
    const isAvailable = juice && juice.status === "available";
    //making sure that juice is available from the firebase
    if (!juice) return null;
    if (!isAvailable) {
      return (
        <CSSTransition
          classNames='order'
          key={key}
          timeout={{ enter: 5000, exit: 5000 }}
        >
          <li key={key}>
            Sorry {juice ? juice.name : "juice"} is no longer available
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition
        classNames='order'
        key={key}
        timeout={{ enter: 250, exit: 250 }}
      >
        <li key={key}>
          <span>
            <TransitionGroup component='span' classNames='count'>
              <CSSTransition
                classNames='count'
                key={count}
                timeout={{ enter: 5000, exit: 5000 }}
              >
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            qty {juice.name}
            {count * juice.price}
            <button onClick={() => this.props.removeFromOrder(key)}>
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
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
        <TransitionGroup component='ul' className='order'>
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className='total'>
          Total:
          <strong>Rs {total}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
