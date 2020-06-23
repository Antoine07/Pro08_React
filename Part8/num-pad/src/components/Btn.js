import React, { Component } from 'react';

class Btn extends Component {

    render() {

        const { action, type, message } = this.props;

        return (
            <p style={{marginTop: "10px"}} >
                <button
                    type="button"
                    className = {`btn ${type}`}
                    onClick={action}
                >
                    {message}
            </button>
            </p>
        );
    }
}


export default Btn;