import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputs, display, remove } from './actions';

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
    const { inputs, getDisplay } = this.props;
    e.preventDefault();
    getDisplay(inputs);
  }

  render() {
    const { display } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="input" onChange={this.handleChange} />
          <input type="text" name="second_input" onChange={this.handleChange} />
          <button>Add Value</button>
        </form>
        <section>
          {display.map((value, index) => {
            return (
              <div key={index} onClick={() => this.handleRemove(index)}>
                <h3>{value.input}</h3>
                <h3>{value.second_input}</h3>
              </div>
            )
          })}
        </section>
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
