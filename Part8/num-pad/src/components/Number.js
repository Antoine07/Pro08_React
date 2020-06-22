import React from 'react';
import { connect } from 'react-redux';
import { setNumber } from '../actions/actions-types';

import './Number.scss';

class Number extends React.Component {
  
    render (){

        const { number, setNumber } = this.props

        return ( 
            <button
                type="button"
                className="btn btn-dark"
                onClick={() => setNumber(number)}
            >
                {number}
            </button>
            )
    }

}

const mapDispatchToProps = { setNumber };

export default connect(null, mapDispatchToProps)(Number);