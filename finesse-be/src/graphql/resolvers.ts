import { Client } from '@apperate/iexjs';
import { Resolver } from 'dns';
import GraphQLJSON from "graphql-type-json";
import { Resolvers } from '../generated/graphql';

const client = new Client({
    api_token: process.env.IEX_API_TOKEN,
    version: 'v1',
  });
  
  const getQuote = (symbol: string) => {
    return client.quote({ symbol: symbol });
  };
  

const resolvers: Resolvers = {
    JSON: GraphQLJSON,
    Query: {
      hello: () => 'world',
    },
    
    Mutation: {
      quote: (_: any, { symbol }) => {
        return getQuote(symbol);
      },
    },
  };

  export default resolvers;