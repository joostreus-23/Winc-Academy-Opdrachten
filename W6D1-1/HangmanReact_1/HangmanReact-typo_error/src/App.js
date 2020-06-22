import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      countDown: 100,
    };
    // hier wordt de functie handleClick functie gebonden met de setState
    this.handleClick = this.handleClick.bind(this);
  }

  // methold handleClick zit in de class App, omdat de handleClick de setState functie heeft moet ie gebonden
  // worden met de constructor, dat gebeurd in de constructor. Met de setState functie kan de houdige state
  // als parameter dienen of hij kan overgeschreven worden.
  handleClick() {
    this.setState((prevState) => {
      if (prevState.count < 10) {
        return {
          count: prevState.count + 1,
          countDown: prevState.countDown - 1,
        };
      } else {
        return {
          count: prevState.count - 10,
          countDown: prevState.countDown + 10,
        };
      }
    });
  }

  render() {
    return (
      <div>
        {/* De h1 haalt de waarde van de state.count op */}
        <h1>{this.state.count}</h1>
        {/* Er zit een eventhandler op de button die de functie handleClick runt */}
        <button onClick={this.handleClick}>Change!</button>
        <h1>{this.state.countDown}</h1>
      </div>
    );
  }
}

export default App;
