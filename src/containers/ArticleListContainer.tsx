import React from 'react';
import { ArticleList } from '../components';
import { useArticleList } from '../hooks';


const ArticleListContainer: React.FC = () => {
  const { loading, error, articles, loadingMore } = useArticleList();

  if (loading && articles.length === 0) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <ArticleList articles={articles} />
      {loadingMore && <p>Loading more...</p>}
    </>
  );
};

export { ArticleListContainer };
