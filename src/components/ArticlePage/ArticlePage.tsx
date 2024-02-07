import React from 'react';
import { ArticlePageStyled, ArticleTitle, ArticleDescription, ArticleImage, ArticleBlot } from './styled';
import { BackButton } from '../BackButton';

const ArticlePage: React.FC<{title:string, image: string, description: string}> = ({title, image, description}) => {

  return (
    <ArticlePageStyled>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleDescription>{description}</ArticleDescription>
      <ArticleImage src={image} alt="Big ico" />
      <ArticleBlot>Шикарные новости для вас :D</ArticleBlot>
      <BackButton />
    </ArticlePageStyled>
  );
};

export { ArticlePage };
