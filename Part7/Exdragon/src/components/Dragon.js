import React, { Component } from 'react'

// on va se connecter au store pour lire le state
import { connect } from 'react-redux';

import { increment, deleteDragon } from '../actions/actions-types';

class Dragon extends Component {

    handleIncrement = e =>{

        this.props.increment(11);
    }

    render() {

        const { dragons, count2, increment, deleteDragon } = this.props;

        return (
            <ul className="list-group">
                {dragons.map((dragon, i) => 
                <li key={i} className="list-group-item d-flex justify-content-between ">{dragon} <button
                 className="btn btn-danger"
                 onClick={() => deleteDragon(dragon)}>Delete</button></li>
                )}
                <li className="list-group-item"><button className="btn btn-primary" onClick={() => increment(11) }>Counter 2</button></li>
                <li className="list-group-item">{count2}</li>
            </ul>
        )
    }
}

const mapStateToProps = state => {

    return {
        dragons: state.dragons,
        elements: state.elements,
        count2 : state.count2
    }
}

// Dispatch sur les props 
const mapDispatchToPros = { increment, deleteDragon } 

/*
const mapDispatchToPros = dispatch => { 

    return { increment : payload => dispatch(  {type: 'INCREMENT', payload } ) } // action.payload dans le reducer
 } 

 const mapDispatchToPros = dispatch => { 

    return { increment : payload => dispatch( increment(payload) ) } // action.payload dans le reducer
 } 
 // la version courte qui marche également est la suivante 
 const mapDispatchToPros = { increment } 
*/

export default connect(mapStateToProps, mapDispatchToPros)(Dragon);