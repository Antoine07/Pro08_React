import React from 'react';

import Post from './Post';

class Posts extends React.Component {

  render() {
    const { posts } = this.props;

    if(posts.length > 0)
      return (
        <>
          { posts.map((post, i) => <Post { ...post } key={i} />)}
        </>
      )
    
    return (<p>Loading ...</p>)
  }
}

export default Posts;
