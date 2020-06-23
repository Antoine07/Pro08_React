import React from 'react';
import { connect } from 'react-redux';


class Input extends React.Component {
   
    render (){
        const { numbers, multiplication } = this.props;
        const { num1, num2 } = multiplication;
        
        return ( 
            <div style={{marginTop: "10px"}} className="alert alert-primary" role="alert">
                Donnez le résultat de  : {num1} X {num2} = {numbers.join('')}
            </div>
            )
    }
}

export default Input;