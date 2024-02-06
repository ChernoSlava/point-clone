import React from 'react';
import { Article } from '../../types';
import { 
  ArticleItemStyled,
  ArticleImg,
  ArticleTitle,
  ArticleDescription,
  ArticleDate
} from './styled';

interface Props {
  article: Article;
}

const ArticleItem: React.FC<Props> = ({ article }) => {
  return (
    <ArticleItemStyled key={article.id}>
      <div>
        <ArticleImg src={article.thumbnail} alt='' />
      </div>
      <ArticleTitle>{article.title.short}</ArticleTitle>
      <ArticleDescription>{article.description.intro}</ArticleDescription>
      <ArticleDate>Posted: {article.dates.posted}</ArticleDate>
    </ArticleItemStyled>
  );
};

export { ArticleItem };