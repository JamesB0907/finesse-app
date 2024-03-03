import { Client } from '@apperate/iexjs';
import { BigIntResolver, DateResolver, JSONResolver } from 'graphql-scalars';
import { GqlResolvers } from '../generated/graphql';

const client = new Client({
  api_token: process.env.IEX_API_TOKEN,
  version: 'v1',
});

const getQuote = (symbol: string) => {
  return client.quote({ symbol: symbol });
};

const resolvers: GqlResolvers = {
  JSON: JSONResolver,
  Date: DateResolver,
  BigInt: BigIntResolver,

  Query: {
    lookup: (_, { symbol }) => {
      return { symbol };
    },
  },

  Mutation: {
    quote: (_: any, { symbol }) => {
      return getQuote(symbol);
    },
  },

  Lookup: {
    revenue: async (lookup, { resolution }) => {
      const result = await client.timeSeries({
        id: 'INCOME',
        key: lookup.symbol,
        limit: 100,
        range: '5y',
        subkey: resolution,
      });
      return result.map((point) => ({
        date: point.fiscalDate,
        value: point.totalRevenue,
      }));
    },
  },
};

export default resolvers;
