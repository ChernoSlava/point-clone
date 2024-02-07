import React from 'react';
import { ArticleItem } from '../ArticleItem';
import { ArticleDateHeading, ArticleListStyled, ArticleList as List } from './styled';
import { Link } from 'react-router-dom';
import { IArticleItemProps } from '../ArticleItem';


interface IArticleList {
  articles: (IArticleItemProps & {url: string})[];
}

const ArticleList: React.FC<IArticleList> = ({ articles }) => {
  
  return (
    <ArticleListStyled>
      <ArticleDateHeading>Сегодня</ArticleDateHeading>
      <List>
        {articles.map((article) => (
          <Link 
            key={article.id} 
            to={article.url} 
            state={{ articleTitle: article.title }}
            >
            <ArticleItem { ...article } />
          </Link>
        ))}
      </List>
    </ArticleListStyled>
  );
};

export { ArticleList };
