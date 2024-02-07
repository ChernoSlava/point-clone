import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArticlePageStyled, ArticleTitle, ArticleDescription } from './styled';
import { BackButton } from '../BackButton';

const ArticlePage: React.FC = () => {
  const location = useLocation();
  const articleTitle = location.state.articleTitle;

  console.log(articleTitle);
  return (
    <ArticlePageStyled>
      <ArticleTitle>{articleTitle}</ArticleTitle>
      <ArticleDescription>Шикарные новости для вас :D</ArticleDescription>
      <BackButton />
    </ArticlePageStyled>
  );
};

export { ArticlePage };
