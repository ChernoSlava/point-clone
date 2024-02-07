import React from 'react';
import { Article } from '../../types';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import { ArticleDateHeading, ArticleListStyled, ArticleList as List } from './styled';

interface Props {
  articles: Article[];
  loadMore: () => Promise<void>;
}

const ArticleList: React.FC<Props> = ({ articles, loadMore }) => {
  
  return (
    <ArticleListStyled>
      <ArticleDateHeading>Сегодня</ArticleDateHeading>
      <List>
        {articles.map((article: Article) => (
           <ArticleItem key={article.id} article={article} />      
        ))}
      </List>
      <button onClick={loadMore}>Load More</button>
    </ArticleListStyled>
  );
};

export { ArticleList };
