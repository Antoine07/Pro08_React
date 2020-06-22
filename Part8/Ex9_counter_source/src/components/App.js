import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions/actions-types'
class App extends Component {

    render() {

        const { count, increment, decrement, message } = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{count}
                            </h5>
                             { message && <p>{message}</p> }
                            <button onClick={increment}> Incrémente </button>
                            <button onClick={decrement}> Décrémente </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = { increment, decrement };
const mapStateToProps = state => { return { ...state } }

export default connect(mapStateToProps, mapDispatchToProps)(App) ;