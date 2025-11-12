// import { GraphQLClient } from 'graphql-request';

// const endpoint = 'http://nextjs-headless.local/graphql'; 

// export const client = new GraphQLClient(endpoint);
import { GraphQLClient } from 'graphql-request';

// Use environment variable first, fallback to local for dev
const endpoint =
  process.env.NEXT_PUBLIC_WP_GRAPHQL_URL ||
  'http://nextjs-headless.local/graphql';

export const client = new GraphQLClient(endpoint);


