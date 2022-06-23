import { ApolloProvider, gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apolo";

import { Event } from "./pages/Event";
import { Router } from "./Router";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
