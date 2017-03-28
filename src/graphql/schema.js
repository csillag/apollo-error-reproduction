import { makeExecutableSchema } from 'graphql-tools';
import { decode } from '../decode';

const typeDefs = decode(require('./schema.graphql'));

const peopleData = [
  { id: 1, name: 'John Smith' },
  { id: 2, name: 'Sara Smith' },
  { id: 3, name: 'Budd Deey' },
];

const resolvers = {
    Query: {
        people: () => peopleData,
    },
};

// We build the scheme using graphql-tool's magic
export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
