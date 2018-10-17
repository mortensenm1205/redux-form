import React, { Component } from 'react';
import DisplayList from './List';
import { remove } from './actions';
import { connect } from 'react-redux';

class DisplayContainer extends Component {

    handleRemove = index => {
        const { removeDisplay } = this.props;
        removeDisplay(index);
    }

    render() {
        const { display } = this.props;
        return (
            <div>
                <DisplayList display={display} remove={this.handleRemove} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        display: state.display
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeDisplay: index => dispatch(remove(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainer);
