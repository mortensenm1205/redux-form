import React, { Component } from 'react';
import InputForm from './Form';
import { inputs } from './actions'; 
import { display } from '../Display/actions';
import { connect } from 'react-redux';

class InputsContainer extends Component {
    handleChange = e => {
        const { name, value } = e.target;
        const { getInputs } = this.props;
        getInputs(name, value);
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
        return(
            <div>
                <InputForm submit={this.handleSubmit} change={this.handleChange} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        inputs: state.inputs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getInputs: (n, v) => dispatch(inputs(n, v)),
        getDisplay: obj => dispatch(display(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputsContainer);
