import { makeExecutableSchema } from 'graphql-tools';
import { decode } from '../decode';

const typeDefs = decode(require('./schema.graphql'));

const peopleData = [
    { id: 1, name: 'John Smith', sex: "male", trouserSize: 6 },
    { id: 2, name: 'Sara Smith', sex: "female", skirtSize: 4 },
    { id: 3, name: 'Budd Deey', sex: "male", trouserSize: 10 },
];

const resolvers = {
    Query: {
        people: () => peopleData,
    },
    Person: {
        __resolveType: (root, _, info) => {
            switch (root.sex) {
            case 'male':
                return info.schema.getType('Man');
            case 'female':
                return info.schema.getType('Woman');
            default:
                throw new Error('One is either male or female.');
            }
        }
    }
};

// We build the scheme using graphql-tool's magic
export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
