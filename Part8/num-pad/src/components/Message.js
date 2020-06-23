import React from 'react';

class Message extends React.Component {

    render() {

        const { content, type } = this.props.message;

        const cl = [ "alert ", `alert-${type}` ].join(" ");

        return (
            <div style={{marginTop: "10px"}} className={cl} role="alert">
                {content}
            </div>
        )
    }

}

export default Message;