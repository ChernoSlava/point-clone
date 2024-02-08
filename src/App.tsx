import React from "react";
import { Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { LOGO_URL } from "@constants/index";

import client from "./client";
import { AppLayout } from "./components";
import { ArticleListContainer, ArticlePageContainer } from "./containers";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppLayout logo={process.env.REACT_APP_LOGO_LINK || LOGO_URL}>
        <Routes>
          <Route path="/" element={<ArticleListContainer />} />
          <Route path="/article/:slag" element={<ArticlePageContainer />} />
        </Routes>
      </AppLayout>
    </ApolloProvider>
  );
};
export default App;
