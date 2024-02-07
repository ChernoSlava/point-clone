import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './client';
import { ArticleListContainer, ArticlePageContainer } from './containers';
import {  Route, Routes, Link } from 'react-router-dom';
import { AppStyled, MainLogoStyled } from './styled';

function App() {
  return (
    <ApolloProvider client={client}>
      <AppStyled>
        <Link to="/">
          <MainLogoStyled src='https://point.md/static/svg/new-point-logo.svg' alt='Point logo' />
        </Link>
        <Routes>
            <Route path="/" element={<ArticleListContainer />} /> 
            <Route  path="/article/:slag" element={<ArticlePageContainer />} />
        </Routes>
      </AppStyled>
    </ApolloProvider>
  );
}

export default App;
