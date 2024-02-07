import React from 'react';
import { Article } from '../../types';
import { 
  ArticleItemStyled,
  ArticleImg,
  ArticleImgBox,
  ArticleTitle,
  ArticleDescription,
  ArticleDate
} from './styled';
import { formatTimeSincePublication } from '../../utils';

interface Props {
  article: Article;
}

const ArticleItem: React.FC<Props> = ({ article }) => {
  return (
    <ArticleItemStyled key={article.id}>
      <ArticleImgBox>
        <ArticleImg src={article.thumbnail} alt='Cartoon' />
      </ArticleImgBox>
      <ArticleTitle>{article.title.short}</ArticleTitle>
      <ArticleDescription>{article.description.intro}</ArticleDescription>
      <ArticleDate>Posted: {formatTimeSincePublication(article.dates.posted)}</ArticleDate>
    </ArticleItemStyled>
  );
};

export { ArticleItem };
