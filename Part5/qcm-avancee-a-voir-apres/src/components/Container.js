import React, { Component } from 'react';

class Container extends Component {

  render() {

    const { children, content } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {children}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              {content}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Container;