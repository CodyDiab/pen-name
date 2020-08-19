import React from 'react';
import 'semantic-ui-less/semantic.less';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/Login';
import Sigmup from './pages/Signup';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {
  return (
 <ApolloProvider client={client}>
   <Router>
     <Switch>
       <Route exact path="/login" component={Login}/>
       <Route exact path="/signup" component={Sigmup}/>
     </Switch>
   </Router>
  </ApolloProvider>
  );
}

export default App;
