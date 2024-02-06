import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './client';
import { ArticleListContainer } from './containers';

import { AppStyled, MainLogo } from './styled';

function App() {
  return (
    <ApolloProvider client={client}>
      <AppStyled> 
        <MainLogo src='./logo.png' alt='Point logo' />
        <ArticleListContainer />
      </AppStyled>
    </ApolloProvider>
  );
}

export default App;
