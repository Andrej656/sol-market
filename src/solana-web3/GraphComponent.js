// TheGraphComponent.js
import React, { useState, useEffect } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const TheGraphComponent = () => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    const graphEndpoint = 'your-subgraph-endpoint';
    const graphClient = new ApolloClient({
      uri: graphEndpoint,
      cache: new InMemoryCache(),
    });
    setClient(graphClient);
  }, []);

  const fetchData = async () => {
    if (client) {
      try {
        const query = gql`
          query {
            // Your GraphQL query to fetch data from The Graph
          }
        `;
        const result = await client.query({ query });
        console.log('Data from The Graph:', result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data from The Graph</button>
    </div>
  );
};

export default TheGraphComponent;
