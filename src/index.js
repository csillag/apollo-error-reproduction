import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
// import { IntrospectionFragmentMatcher } from 'apollo-client';
import { ApolloClient, ApolloProvider } from 'react-apollo';
import { networkInterface } from './graphql/networkInterface';
import App from './App';

const client = window.apollo = new ApolloClient({
    networkInterface,
//    fragmentMatcher: new IntrospectionFragmentMatcher(),
});

ReactDOM.render(
  <ApolloProvider client={client}><App /></ApolloProvider>,
  document.getElementById('root'),
);
