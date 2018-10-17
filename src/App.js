import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputs } from './actions';

class App extends Component {

  state = {
    displayInputs: []
  }

  handleChange = e => {
    const { name, value } = e.target;
    const { getInputs } = this.props;
    getInputs(name, value);
  }

  handleSubmit = e => {
    const { inputs } = this.props;
    const { displayInputs } = this.state;
    e.preventDefault();
    this.setState({
      displayInputs: displayInputs.concat(inputs)
    })
  }

  render() {
    const { displayInputs } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="input" onChange={this.handleChange} />
          <input type="text" name="second_input" onChange={this.handleChange} />
          <button>Add Value</button>
        </form>
        <section>
          {console.log(displayInputs)}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inputs: state.inputs 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInputs: (n, v) => dispatch(inputs(n, v))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
