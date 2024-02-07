import React from 'react';
import { Article } from '../../types';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import { ArticleDateHeading, ArticleListStyled, ArticleList as List } from './styled';
import { Link } from 'react-router-dom';
import { generateSlug } from '../../utils';

interface Props {
  articles: Article[];
}

const ArticleList: React.FC<Props> = ({ articles }) => {
  
  return (
    <ArticleListStyled>
      <ArticleDateHeading>Сегодня</ArticleDateHeading>
      <List>
        {articles.map((article: Article) => (
          <Link 
            key={article.id} 
            to={`/article/${generateSlug(article.title.short)}`} 
            state={{ articleTitle: article.title.short }}
            >
            <ArticleItem article={article} />
          </Link>
        ))}
      </List>
    </ArticleListStyled>
  );
};

export { ArticleList };
