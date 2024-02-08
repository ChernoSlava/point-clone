import React from "react";
import { Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import client from "./client";
import { AppLayout } from "./components";
import { ArticleListContainer, ArticlePageContainer } from "./containers";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppLayout>
        <Routes>
          <Route path="/" element={<ArticleListContainer />} />
          <Route path="/article/:slag" element={<ArticlePageContainer />} />
        </Routes>
      </AppLayout>
    </ApolloProvider>
  );
};
export default App;
