import React from 'react';
import { ArticlePageStyled, ArticleTitle, ArticleDescription } from './styled';
import { BackButton } from '../BackButton';

const ArticlePage: React.FC<{title:string}> = ({title}) => {

  return (
    <ArticlePageStyled>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleDescription>Шикарные новости для вас :D</ArticleDescription>
      <BackButton />
    </ArticlePageStyled>
  );
};

export { ArticlePage };
