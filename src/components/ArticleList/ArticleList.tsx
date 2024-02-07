import React from 'react';
import { ArticleItem } from '../ArticleItem';
import { ArticleDateHeadingStyled, ArticleListStyled, ListStyled } from './styled';
import { Link } from 'react-router-dom';
import { IArticleItemProps } from '../ArticleItem';


interface IArticleList {
  articles: (IArticleItemProps & {url: string})[];
}

const ArticleList: React.FC<IArticleList> = ({ articles }) => {
  
  return (
    <ArticleListStyled>
      <ArticleDateHeadingStyled>Сегодня</ArticleDateHeadingStyled>
      <ListStyled>
        {articles.map((article) => (
          <Link 
            key={article.id} 
            to={article.url} 
            state={{ articleTitle: article.title, image: article.image, description: article.description }}
            >
            <ArticleItem { ...article } />
          </Link>
        ))}
      </ListStyled>
    </ArticleListStyled>
  );
};

export { ArticleList };
