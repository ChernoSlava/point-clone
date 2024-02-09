import React from "react";
import { useLocation } from "react-router-dom";
import { ArticlePage } from "@components/index";

const ArticlePageContainer: React.FC = () => {
  const location = useLocation();
  const { articleTitle, image, description } = location.state || {
    articleTitle: "Default Title",
    image: "default-image.jpg",
    description: "Default Description",
  };

  return (
    <ArticlePage title={articleTitle} image={image} description={description} />
  );
};

export { ArticlePageContainer };
