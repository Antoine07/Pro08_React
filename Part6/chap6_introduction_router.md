# Exemple d'utilisation du module router React

Installez un projet create-react-app et le module suivant :

```bash
npm install --save react-router-dom
```

Exemple détaillé

```js

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect
} from "react-router-dom";

import Home from './Home';
import Post from './Post';

import './App.css';

const auth = false;

const Author = ({ match }) => {
  const { id } = useParams(); // Hook de la librairie react-router-dom qui permet de récupérer id dans l'url

  // si vous voulez passer par les props vous pouvez faire comme suit mais attention regarder bien comment passer le composant à
  // la route la variable id est définie dans le Link des auteurs
  // match.params.id 
  console.log(match.params);

  return (
    <p>Auteur id : {id}</p>
  )
}

const Login = ({location}) => {
  console.log(location);

  return (<p>Page de login</p>);
}

class App extends React.Component {

  render() {

    // attention pour gérer les routes mettre tout dans le composant Router

    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/post">
                Post
              </Link>
            </li>
            <li>
              <Link to="/author/1">
                Alan
              </Link>
            </li>
            <li>
              <Link to="/author/2">
                Albert
              </Link>
            </li>
            { auth === false && 
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>
            }
            <li>
              <Link to="/dashboard">
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/post">
            <Post />
          </Route>
          { /* on peut récupérer les props du module router dans le composant voir au-dessus */}
          <Route exact path="/author/:id" component={Author} />

          <Route path="/login" component={Login} />

          <Route path="/dashboard" render={({ location }) => {

            if (auth == false) {

              return (
                <Redirect to={{
                  pathname: "/login", // indique la route vers laquelle on souhaite faire une redirection
                  state: { from: location } // récupérer les paramètres de la route
                }} />
              )
            }

            // si je passe l'authentification j'affiche mon dashboard
            return (
              <p>Bienvenu sur l'administration</p>
            )
          }} />
          <Route path="*">
            <p>No match</p>
          </Route>
        </Switch>

      </Router>
    )
  }
}

export default App;

```