import React, { Component } from 'react'

import { connect } from 'react-redux';
import { add, setDragon } from '../actions/actions-types';

class Form extends Component {

    handleSubmit = e => {
        e.preventDefault();

        this.props.add()
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.props.setDragon(value);
    }
  
    render() {

        const { dragon } = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Ajoutez un dragon</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="add dragon..."
                        value={dragon}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" class="btn btn-primary">Add</button>
            </form>
        );
    }
}

const mapStateToProps = state => { return { dragon : state.dragon }}
const mapDispatchToProps = { add, setDragon }

export default connect(mapStateToProps, mapDispatchToProps)(Form);