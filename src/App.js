import React, { Component } from 'react';
import Inputs from './components/Inputs/Form';
import { inputs } from './components/Inputs/actions';
import Display from './components/Display/List';
import { display, remove } from './components/Display/actions';
import { connect } from 'react-redux';

class App extends Component {

  handleChange = e => {
    const { name, value } = e.target;
    const { getInputs } = this.props;
    getInputs(name, value);
  }

  handleRemove = index => {
    const { removeDisplay } = this.props;
    removeDisplay(index);
  }

  handleSubmit = e => {
    const { input, second_input } = e.target;
    const { inputs, getDisplay } = this.props;
    e.preventDefault();
    input.value = "";
    second_input.value = "";
    getDisplay(inputs);
  }

  render() {
    const { display, store } = this.props;
    return (
      <div>
        <Inputs submit={this.handleSubmit} change={this.handleChange} />
        <Display display={display} remove={this.handleRemove} />
        {console.log(store.getState())}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inputs: state.inputs,
    display: state.display
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInputs: (n, v) => dispatch(inputs(n, v)),
    getDisplay: obj => dispatch(display(obj)),
    removeDisplay: index => dispatch(remove(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
