import React, { Component } from "react";

export class AddJuiceForm extends Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imgRef = React.createRef();

  createJuice = event => {
    //stopping form from submitting
    event.preventDefault();
    const juice = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      img: this.imgRef.current.value
    };
    this.props.addJuice(juice);
    event.currentTarget.reset(); //to reset the from we use this method
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createJuice}>
        <input
          type="text"
          ref={this.nameRef}
          name="name"
          placeholder="Name"
          required
        />
        <input
          type="number"
          name="price"
          ref={this.priceRef}
          placeholder="Price"
          required
        />
        <select name="status" ref={this.statusRef} required>
          <option value="available">Fresh</option>
          <option value="unavailable">Added Preservatives</option>
        </select>

        <textarea name="desc" ref={this.descRef} placeholder="desc" />
        <input name="image" type= "text" placeholder="image" ref={this.imgRef} />

        <button type="submit">+ Add Juice/Snacks </button>
      </form>
    );
  }
}

export default AddJuiceForm;
