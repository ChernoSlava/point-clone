import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

import { ArticleList } from "../ArticleList";

describe("ArticleList tests", () => {
  const articles = [
    {
      id: "1",
      title: "Article 1",
      url: "/article-1",
      image: "article-1.jpg",
      description: "Description for Article 1",
      thumbnail: "article-1.jpg",
      date: "2 дня назад",
    },
    {
      id: "2",
      title: "Article 2",
      url: "/article-2",
      image: "article-2.jpg",
      description: "Description for Article 2",
      thumbnail: "article-2.jpg",
      date: "8 дней назад",
    },
  ];

  test("renders article list correctly", () => {
    const { container, unmount } = render(
      <MemoryRouter>
        <ArticleList articles={articles} />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
    unmount();
  });
});
