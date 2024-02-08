import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import { ArticleItem } from "..";

describe("ArticleItem tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders with correct title, image, and description", () => {
    const article = {
      id: "1",
      thumbnail: "test-thumbnail.jpg",
      title: "Test Title",
      description: "Test Description",
      date: "2 дня назад",
    };

    const { container, unmount } = render(
      <MemoryRouter>
        <ArticleItem
          id={article.id}
          title={article.title}
          thumbnail={article.thumbnail}
          description={article.description}
          date={article.date}
        />
      </MemoryRouter>
    );

    expect(screen.getByText(article.title)).toBeTruthy();
    expect(screen.getByAltText("Cartoon")).toBeTruthy();
    expect(screen.getByAltText("icon")).toBeTruthy();
    expect(screen.getByText(article.description)).toBeTruthy();

    expect(container).toMatchSnapshot();
    unmount();
  });
});
