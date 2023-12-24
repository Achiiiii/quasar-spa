import { ApolloClient /*, createHttpLink */ } from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { boot } from 'quasar/wrappers';
import { getClientOptions } from 'src/apollo';

const options = /* await */ getClientOptions(/* {app, router ...} */);
const apolloClient = new ApolloClient(options);
export default boot(({ app }) => {
  app.provide(DefaultApolloClient, apolloClient);
});

export { apolloClient };
