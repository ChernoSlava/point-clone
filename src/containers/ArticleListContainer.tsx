import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { ARTICLES_QUERY } from '../utils';
import { ArticleList } from '../components';
import { Article } from '../types';

const ArticleListContainer: React.FC = () => {
  const { loading, error, data, fetchMore } = useQuery(ARTICLES_QUERY, {
    variables: { skip: 0 },
    fetchPolicy: 'cache-and-network',
  });
  
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (!loading && data && data.contents) {
      setArticles(data.contents);
    }
  }, [loading, data]);

  const loadMore = async () => {
    console.log('Loading more articles...');
    try {
      console.log('Current skip value:', articles.length);
      const result = await fetchMore({
        variables: {
          skip: articles.length,
        },
      });
      const newArticles = result.data.contents;
      console.log('New articles:', newArticles);
      setArticles(prevArticles => [...prevArticles, ...newArticles]);
    } catch (err) {
      console.error('Error loading more articles:', err);
    }
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <ArticleList articles={articles} loadMore={loadMore} />;
};

export { ArticleListContainer };
