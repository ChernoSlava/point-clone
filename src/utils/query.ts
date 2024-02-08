import { gql } from "@apollo/client";

export const ARTICLES_QUERY = gql`
  query Articles($skip: Int!) {
    contents(
      project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1"
      lang: "ru"
      skip: $skip
      take: 10
    ) {
      id
      title {
        short
      }
      thumbnail
      dates {
        posted
      }
      description {
        intro
      }
    }
  }
`;
