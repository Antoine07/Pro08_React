import React from 'react';

class Post extends React.Component {

  render() {

    const { title, content, category, author, date } = this.props;

    return (
      <article>
        <header>
          <h1>{title}</h1>
          <p>{content}</p>
          <footer>
            <p><small>Auteur : {author}</small></p>
            <p><small>category : {category}</small></p>
            <p><small>Date de publication : {date}</small></p>
          </footer>
        </header>
      </article>
    )
  }
}

export default Post;
