import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri : 'https://api-sa-east-1.graphcms.com/v2/cl4osjl6l0z7601xscmmbcuif/master',
  cache: new InMemoryCache()
})