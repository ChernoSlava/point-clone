import React from 'react';
import { BackButton } from '../BackButton';

import { 
  ArticlePageStyled,
  ArticleTitleStyled,
  ArticleDescriptionStyled,
  ArticleImageStyled,
  ArticleBlotStyled, 
} from './styled';


const ArticlePage: React.FC<{title:string, image: string, description: string}> = ({
  title, image, description
}) => {

  return (
    <ArticlePageStyled>
      <ArticleTitleStyled>{title}</ArticleTitleStyled>
      <ArticleDescriptionStyled>{description}</ArticleDescriptionStyled>
      <ArticleImageStyled src={image} alt="Big ico" />
      <ArticleBlotStyled>Шикарные новости для вас :D</ArticleBlotStyled>
      <BackButton />
    </ArticlePageStyled>
  );
};

export { ArticlePage };
