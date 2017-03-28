import { gql } from 'react-apollo';
import { decode } from './decode';

export const getPeople = window.getPeople = gql`${decode(require('./getPeople.graphql'))}`
