import React from 'react';
import { ArticleList } from '../../components';
import { useArticleList } from '../../hooks';
import { formatTimeSincePublication, generateSlug, removeHtmlEntities } from '../../utils';
import { NEWS_BIG_IMAGE_URL, NEWS_IMAGE_URL } from '../../constants';


const ArticleListContainer: React.FC = () => {
  const { loading, error, articles, loadingMore } = useArticleList();

  if (loading && articles.length === 0) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <ArticleList articles={articles.map((article) => ({
        id: article.id, 
        title: removeHtmlEntities(article.title.short),
        description: removeHtmlEntities(article.description.intro),
        thumbnail: `${NEWS_IMAGE_URL}${article.thumbnail}`,
        image: `${NEWS_BIG_IMAGE_URL}${article.thumbnail}`,
        date: formatTimeSincePublication(article.dates.posted),
        url: `/article/${generateSlug(article.title.short)}`,
        }))
      } />
      {loadingMore && <p>Loading more...</p>}
    </>
  );
};

export { ArticleListContainer };
