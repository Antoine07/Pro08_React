import React, { Component } from 'react'
import { connect } from 'react-redux';
import Dragon from './Dragon';
import Form from './Form';
import Nav from './Nav';

import { reverse } from '../actions/actions-types';

class App extends Component {


    render() {

        const { message, count, reverse } = this.props;

        return (
            <div className="container">
                <Nav count={count} />
                {message && <p>{message}</p>}
                <button onClick={reverse} className="btn btn-primary">Reverse</button>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <Form />
                    </div>
                    <div className="col-12 col-md-8">
                        <Dragon />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => { return { message: state.message, count: state.count } }

const mapDispatchToProps = { reverse }

export default connect(mapStateToProps, mapDispatchToProps)(App);;