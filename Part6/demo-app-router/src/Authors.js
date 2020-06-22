import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Authors extends React.Component {

  render() {
    const { authors } = this.props;

    if (authors.length > 0)
      return (
        <ul>
          {[ ...new Set(authors) ].map((author, i) => {
            if (author)
              return (<li key={i} > <Link to= {`/author/${author}`} >{author}</Link></li>)
          })}
        </ul>
      )

    return (<p>Loading ...</p>)
  }
}

export default Authors;
