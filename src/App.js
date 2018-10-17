import React, { Component } from 'react';

class App extends Component {
  state = {
    localInputs: {}
  }

  handleChange = e => {
    const { name, value } = e.target;
    const { localInputs } = this.state;
    this.setState({
      localInputs: { ...localInputs, [name]: value }
    })
  }

  handleSubmit = e => {
    const { localInputs } = this.state;
    e.preventDefault();
    console.log(localInputs);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="input" onChange={this.handleChange} />
        <input type="text" name="second_input" onChange={this.handleChange} />
        <button>Add Value</button>
      </form>
    );
  }
}

export default App;
