import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

import { Event } from "./pages/Event";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

function App() {
  return (
    <div>
    <Event/>

    </div>
  )
}

export default App;
