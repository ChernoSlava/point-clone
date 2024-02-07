import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArticlePage } from '../../components/ArticlePage';

const ArticlePageContainer: React.FC = () => {
  const location = useLocation();
  const articleTitle = location.state.articleTitle;

  return (
    <ArticlePage title={articleTitle} />
  );
};

export { ArticlePageContainer };
