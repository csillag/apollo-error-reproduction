import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getPeople } from './queries';

class App extends Component {
  render() {
    const { data: { loading, people } } = this.props;
    console.log("loading:", loading, "people:", people);
    return (
      <main>
        <header>
          <h1>Apollo Client Error Reproduction</h1>
          <p>
            This is a template to demonstrate the error(s) I find in Apollo Client.
          </p>
          <p>
            The GraphQL schema is in <code>./src/graphql/schema.graphql</code>.
            The GraphQL query is in <code>./src/getPeople.graphql</code>.
          </p>
        </header>
        {loading ? (
          <p>Loading…</p>
        ) : (
            people ? (
          <ul>
            {people.map(person => (
              <li key={person.id}>
                  { JSON.stringify(person) }
              </li>
            ))}
          </ul>
            ) : (
                <p>No data</p>
            )
        )}
      </main>
    );
  }
}

export default graphql(
    getPeople
)(App)
