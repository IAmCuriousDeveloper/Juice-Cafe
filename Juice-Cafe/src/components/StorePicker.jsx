import React from "react";
class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    //preventing default (i.e) loading again
    event.preventDefault();
    //getting input via refs here myinput (synatax - this.myinput.current.value)
    const input = this.myInput.current.value;
    //using react router to change the route 
    this.props.history.push(`/store/${input}`);
  }
  render() {
    // making a fragment and doing jsx stuff ,also use ( ) in return statement coz javaScript use asi(automatic semicolon insertion)
    return (
      <>
        <form onSubmit={this.goToStore} className="store-selector">
          <h2>Please choose Store</h2>
          <input ref={this.myInput} type="text" required placeholder="Choose our store"  defaultValue='Juice Cafe'/>
          <button type="submit">Visit</button>
        </form>
        {/* this is a comment on jsx  and it only work under some tags */}
      </>
    );
  }
}


export default StorePicker;
