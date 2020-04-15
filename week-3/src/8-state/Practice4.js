import React from "react";

/*
  1. Create a functional component called Header
  2. Return an <h2> with the value of text from props.text
*/
function Header(props) {
  return(
    <h2>{props.text}</h2>
  );
}

/*
  3. Create a functional component called Button
  4. Return an <button> with the value for onCLick set 
      to props.onClick and the value of the Button text
      set to props.text      
*/
function Button(props) {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  );
}

class Practice4 extends React.Component {
  /*
    5. Setup state with a count property set to 0
  */
  state = {
    count: 0
  }

  /*
    6. Create an incremenent function that adds one to the value of count in state
    7. Create a decremenent function that subtracts one from the value of count in state
    8. Create a reset function that sets the value of count in state back to 0
  */
  incremenent = () => {
    this.setState({ count: this.state.count + 1 });
  }

  decremenent = () => {
    this.setState({ count: this.state.count - 1 });
  }

  reset = () => {
    this.setState({ count: 0 });
  }

  render() {
    console.log(this.state);
    return (
      <>
        {/*
          9. Call Header and pass in the counter state as the text prop
          10. Call Button with onClick set to decrement and text "-"
          11. Call Button with onClick set to increment and text "+"
          12. Call Button with onClick set to reset and text "Reset"
        */}
        <Header text={this.state.count} />
        <Button onClick={this.incremenent} text="+" />
        <Button onClick={this.decremenent} text="-" />
        <Button onClick={this.reset} text="Reset" />
      </>
    );
  }
}

export default Practice4;
