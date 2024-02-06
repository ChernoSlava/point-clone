import React from 'react';
import { useQuery } from '@apollo/client';
import client from '../client';
import { ARTICLES_QUERY as query } from '../utils';
import { ArticleList } from '../components';

const ArticleListContainer: React.FC = () => {
  const { loading, error, data } = useQuery(query, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return <ArticleList articles={data.contents} />;
};

export { ArticleListContainer };
