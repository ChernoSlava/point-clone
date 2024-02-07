import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './client';
import { ArticleListContainer } from './containers';
import {  Route, Routes } from 'react-router-dom';
import { AppStyled, MainLogo } from './styled';
import { ArticlePage } from './components/ArticlePage';

function App() {
  return (
    <ApolloProvider client={client}>
      <AppStyled>
        <MainLogo src='./logo.png' alt='Point logo' />
        <Routes>
            <Route path="/" element={<ArticleListContainer />} /> 
            <Route  path="/article/:slag" element={<ArticlePage />} />
        </Routes>
      </AppStyled>
    </ApolloProvider>
  );
}

export default App;
