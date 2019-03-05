import React, { Component } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleJuices from "../sample-fishes"

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

  loadSampleJuices = () => {
    this.setState({juices : sampleJuices})
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline='Refuel Your Soul'/>
        </div>
        <Order />
        <Inventory loadSampleJuices = {this.loadSampleJuices} addJuice= {this.addJuice} />
      </div>
    );
  }
}

export default App;
