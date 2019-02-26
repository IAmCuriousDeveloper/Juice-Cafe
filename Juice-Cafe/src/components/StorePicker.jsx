import React from "react";
class StorePicker extends React.Component {
  render() {
    // making a fragment and doing jsx stuff ,also use ( ) in return statement coz javaScript use asi(automatic semicolon insertion)
    return (
      <>
        <form action="" className="store-selector">
          <h2>Please choose Store</h2>
          <input type="text" required placeholder="Choose our store" />
          <button type="submit">Visit</button>
        </form>
        {/* this is a comment on jsx  and it only work under some tags */}
      </>
    );
  }
}


export default StorePicker;
