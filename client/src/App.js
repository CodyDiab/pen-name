import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// add these two library import statements
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import './sass/styles.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import ChangeTheme from './components/ChangeTheme';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SinglePost from './pages/SinglePost';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import {StoreProvider} from './utils/GlobalState';
import Home from './pages/Home';
import WritePost from './pages/WritePost'

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

const App = () => {
  return (
    
    <ApolloProvider client={client}>
      <Router>
        <StoreProvider>
          
        <div className="main">
          <Header />
          
          <div className="container">
            <div className="container toggle">
            <ChangeTheme />
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile/:username?" component={Profile} />
              <Route exact path="/post/:id" component={SinglePost} />
              <Route exact path="/write" component={WritePost}/>

              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
        </StoreProvider>
      </Router>
    </ApolloProvider>
    
  );
}

export default App;
