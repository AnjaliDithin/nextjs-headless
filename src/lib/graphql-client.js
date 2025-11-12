
import { GraphQLClient } from 'graphql-request';

// Use environment variable first, fallback to local for dev
const endpoint =
  process.env.NEXT_PUBLIC_WP_GRAPHQL_URL ||
  'https://headless-nextui.wuaze.com/graphql';

export const client = new GraphQLClient(endpoint);


