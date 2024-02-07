import React from 'react';
import { 
  ArticleItemStyled,
  ArticleImgStyled,
  ArticleImgBoxStyled,
  ArticleTitleStyled,
  ArticleDescriptionStyled,
  ArticleDateStyled,
  ArticleDescriptionBoxStyled,
  ArticleIcoStyled,
} from './styled';

interface IArticleItemProps {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

const ArticleItem: React.FC<IArticleItemProps> = ({ id, thumbnail, title, description, date }) => {
  return (
    <ArticleItemStyled key={id}>
      <ArticleImgBoxStyled>
        <ArticleImgStyled src={thumbnail} alt='Cartoon' />
      </ArticleImgBoxStyled>
      <ArticleDescriptionBoxStyled>
        <ArticleTitleStyled>{title}</ArticleTitleStyled>
        <ArticleDescriptionStyled>{description}</ArticleDescriptionStyled>
        <ArticleDateStyled>
          <ArticleIcoStyled src={thumbnail} alt="icon" />
          {date}
        </ArticleDateStyled>
      </ArticleDescriptionBoxStyled>
    </ArticleItemStyled>
  );
};

export { ArticleItem };  
export type { IArticleItemProps };

