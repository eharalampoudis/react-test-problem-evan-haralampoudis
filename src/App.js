import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Toggled is our tracked state for the button
      toggled: true
    };
  }

  //handler goes here
  //handleClick takes the previously set state for Toggled and switches it
  handleClick() {
    this.setState(prev => ({
      toggled: !prev.toggled
    }));
  }

  //onClick for this button we run handleClick, the outputted text stems from the ternary statement
  render() {
    return (
      <div>
        <p>Greetings!</p>
        <p><button onClick={() => this.handleClick()}>
          {this.state.toggled ? 'Click me!' : 'Thanks!'}
          </button></p>
      </div>
    );
  }
}