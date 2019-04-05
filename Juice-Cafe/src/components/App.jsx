import React, { Component } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleJuices from "../sample-fishes";
import Juice from "./Juice";

class App extends Component {
  state = {
    juices: {},
    order: {}
  };

  addJuice = juice => {
    //making copy of juice coz state should be immutable
    const juices = { ...this.state.juices };
    //adding our new juice
    juices[`juice${Date.now()}`] = juice;
    //setting the state up
    this.setState({
      juices
    });
  };
  //loading sample juices to our view
  loadSampleJuices = () => {
    this.setState({ juices: sampleJuices });
  };

  addToOrder = key => {
    //1.taking a copy of state
    const order = { ...this.state.order };
    //2.add or update the order
    order[key] = order[key] + 1 || 1;
    //setState the order
    this.setState({
      order
    });
  };

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Refuel Your Soul' />
          <ul className='fishes'>
            {Object.keys(this.state.juices).map(key => (
              <Juice
                index={key}
                key={key}
                details={this.state.juices[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        {/* we can use the spread operator to pass everything like ...this.state*/}
        <Order juices={this.state.juices} order={this.state.order} />
        <Inventory
          loadSampleJuices={this.loadSampleJuices}
          addJuice={this.addJuice}
        />
      </div>
    );
  }
}

export default App;
