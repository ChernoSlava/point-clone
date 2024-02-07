import React from 'react';
import { 
  ArticleItemStyled,
  ArticleImg,
  ArticleImgBox,
  ArticleTitle,
  ArticleDescription,
  ArticleDate,
  ArticleDescriptionBox
} from './styled';

interface IArticleItemProps {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  date: string;
}

const ArticleItem: React.FC<IArticleItemProps> = ({ id, thumbnail, title, description, date }) => {
  return (
    <ArticleItemStyled key={id}>
      <ArticleImgBox>
        <ArticleImg src={thumbnail} alt='Cartoon' />
      </ArticleImgBox>
      <ArticleDescriptionBox>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleDescription>{description}</ArticleDescription>
        <ArticleDate>Posted: {date}</ArticleDate>
      </ArticleDescriptionBox>
    </ArticleItemStyled>
  );
};

export { ArticleItem };  
export type { IArticleItemProps };

