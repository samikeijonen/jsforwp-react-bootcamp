import React from 'react';

const Button = (props) => {
  return(
      <button onClick={props.onClick}>{props.text}</button>
  );
}

const Header = (props) => {
  return(
    <h2>{props.text}</h2>
  );
}

class Test extends React.Component {
  state = {
      count: 0
  }

  inc = () => {
    this.setState({count: this.state.count + 1})
  }

  dec = () => {
    this.setState({count: this.state.count - 1})
  }

  res = () => {
    this.setState({count: 0})
  }

  render() {
      return(
          <>
            <Header text={this.state.count} />
            <Button text="+" onClick={this.inc} />
            <Button text="-" onClick={this.dec} />
            <Button text="Reset" onClick={this.res} />
          </>
      );
  }
}

export default Test;