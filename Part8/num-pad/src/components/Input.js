import React from 'react';

class Input extends React.Component {
   
    render (){
        const { numbers } = this.props;
        
        return ( 
            <div className="alert alert-primary" role="alert">
                Calcul : {numbers.join('')}
            </div>
            )
    }
}

export default Input;