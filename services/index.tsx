import request, { gql } from 'graphql-request';

export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        stage
        image {
          url
        }
        carType
      }
    }
  `;

  const result = await request(
    'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clsaqhmfp2aj101w3878o2ibi/master',
    query
  );
  return result;
};
