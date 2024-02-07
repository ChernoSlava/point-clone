import React from 'react';
import { 
  ArticleItemStyled,
  ArticleImg,
  ArticleImgBox,
  ArticleTitle,
  ArticleDescription,
  ArticleDate,
  ArticleDescriptionBox,
  ArticleIco
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
      <ArticleImgBox>
        <ArticleImg src={thumbnail} alt='Cartoon' />
      </ArticleImgBox>
      <ArticleDescriptionBox>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleDescription>{description}</ArticleDescription>
        <ArticleDate>
          <ArticleIco src={thumbnail} alt="icon" />
          {date}
        </ArticleDate>
      </ArticleDescriptionBox>
    </ArticleItemStyled>
  );
};

export { ArticleItem };  
export type { IArticleItemProps };

