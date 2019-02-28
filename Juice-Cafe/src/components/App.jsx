import React, { Component } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

export class App extends Component {
  state ={
    juices:{},
    order:{}
  }

  addJuice = juice => {
    //making copy of juice coz state should be immutable
    const juices = {...this.state.juices}
    //adding our new juice 
    juices[`juice${Date.now()}`] = juice;
    //setting the state up
    this.setState({
      juices
    })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline='Freshest juice in the town'/>
        </div>
        <Order />
        <Inventory addJuice= {this.addJuice} />
      </div>
    );
  }
}

export default App;
