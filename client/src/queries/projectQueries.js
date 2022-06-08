import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      status
    }
  }
`;

export { GET_PROJECTS }; //don't export as default because we'll have more than one query
