import React from 'react';
import { Route, Routes } from 'react-router-dom';
import client from './client';
import { ApolloProvider } from '@apollo/client';

import { ArticleListContainer, ArticlePageContainer } from './containers';
import { AppLayout } from './components';

function App() {
  return (
    <ApolloProvider client={client}>
      <AppLayout>
        <Routes>
            <Route path="/" element={<ArticleListContainer />} /> 
            <Route  path="/article/:slag" element={<ArticlePageContainer />} />
        </Routes>
      </AppLayout>
    </ApolloProvider>
  );
}

export default App;
