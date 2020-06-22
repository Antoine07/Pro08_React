import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Posts from './Posts';
import Authors from './Authors';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {

    fetch('/data/posts.json')
      .then(response => response.json())
      .then(data => {
        const { posts } = data; // "posts" : [ ... ]
        this.setState({ posts: posts })
      });
  }

  getPosts = (limit = 2, category = 'all') => {
    let posts = this.state.posts;
    posts = category != 'all' ? posts.filter(post => post.category === category) : posts;
    posts = limit == -1 ? posts : posts.slice(0, limit);

    return posts;
  }

  getAuthors = (limit = -1) => {

    const authors = this.state.posts.map(post => post.author);

    return limit < 0 ? authors : authors.slice(0, limit);
  }

  getAuthorPosts = author => {

    return this.state.posts.filter(post => post.author === author);
  }

  render() {

    const { posts } = this.state;

    return (
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/react">
                React
              </NavLink>
            </li>
            <li>
              <NavLink to="/js">
                JS
              </NavLink>
            </li>
            <li>
              <NavLink to="/authors">
                Authors
              </NavLink>
            </li>

          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Posts posts={this.getPosts(8)} />
          </Route>
          <Route exact path="/react">
            <Posts posts={this.getPosts(-1, 'React')} />
          </Route>
          <Route exact path="/js">
            <Posts posts={this.getPosts(-1, 'JS')} />
          </Route>
          <Route exact path="/authors">
            <Authors authors={this.getAuthors()} />
          </Route>
          <Route exact path="/author/:name" component={({ match }) => {

            return <Posts posts={this.getAuthorPosts(match.params.name)} />;
          }}
          />
          <Route path="*">
            <p>No match</p>
          </Route>
        </Switch>

      </Router>
    )
  }
}

export default App;
