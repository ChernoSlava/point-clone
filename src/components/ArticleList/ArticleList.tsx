import React from "react";
import { Link } from "react-router-dom";

import { ArticleItem, IArticleItemProps } from "../ArticleItem";

import {
  ArticleDateHeadingStyled,
  ArticleListStyled,
  ListStyled,
} from "./styled";

interface IArticleList {
  articles: (IArticleItemProps & { url: string })[];
}

const ArticleList: React.FC<IArticleList> = ({ articles }) => {
  return (
    <ArticleListStyled>
      <ArticleDateHeadingStyled>Сегодня</ArticleDateHeadingStyled>
      <ListStyled>
        {articles.map((article) => (
          <Link
            key={article.id}
            to={article.url}
            state={{
              articleTitle: article.title,
              image: article.image,
              description: article.description,
            }}
          >
            <ArticleItem {...article} />
          </Link>
        ))}
      </ListStyled>
    </ArticleListStyled>
  );
};

export { ArticleList };
