import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendUserChoice } from '../actions/actions-types';

class Submit extends Component {

    render() {

        const { sendUserChoice } = this.props;

        return (
            <button
                type="button"
                className="btn btn-primary"
                onClick={sendUserChoice}
            >
                Go !
            </button>
        );
    }
}

const mapDispatchToProps = { sendUserChoice }

export default connect(null, mapDispatchToProps)(Submit);