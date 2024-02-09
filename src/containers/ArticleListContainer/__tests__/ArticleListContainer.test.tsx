import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mockArticlesSmall } from "@constants/MockData";
import * as useArticleListModule from "@hooks/index";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { ArticleListContainer } from "..";

jest.mock("@hooks/index");

describe("ArticleListContainer tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders loading message while fetching data", () => {
    const mockUseArticleList = jest.fn();
    jest
      .spyOn(useArticleListModule, "useArticleList")
      .mockImplementation(mockUseArticleList);

    mockUseArticleList.mockReturnValue({
      loading: true,
      error: undefined,
      articles: [],
      loadingMore: false,
    });

    render(<ArticleListContainer />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("renders error message while fetching data", () => {
    const mockUseArticleList = jest.fn();
    jest
      .spyOn(useArticleListModule, "useArticleList")
      .mockImplementation(mockUseArticleList);

    mockUseArticleList.mockReturnValue({
      loading: false,
      error: new Error("Test error"),
      articles: [],
      loadingMore: false,
    });

    render(<ArticleListContainer />);

    expect(screen.getByText("Error: Test error")).toBeInTheDocument();
  });

  test("renders article list with correct data", () => {
    const mockUseArticleList = jest.fn();
    jest
      .spyOn(useArticleListModule, "useArticleList")
      .mockImplementation(mockUseArticleList);

    mockUseArticleList.mockReturnValue({
      loading: false,
      error: undefined,
      articles: mockArticlesSmall,
      loadingMore: false,
    });

    const { container, unmount } = render(
      <MemoryRouter>
        <ArticleListContainer />
      </MemoryRouter>
    );

    const imgElements = screen.queryAllByRole("img", { name: "Cartoon" });
    expect(imgElements.length).toBeGreaterThan(0);

    const firstImgElement = imgElements[0];
    expect(firstImgElement).toHaveAttribute(
      "src",
      "https://i.simpalsmedia.com/point.md/news/900x900/thumbnail1.jpg"
    );

    const thumbnailElements = screen.queryAllByRole("img", { name: "icon" });
    expect(thumbnailElements.length).toBeGreaterThan(0);

    const secondThumbnailElement = thumbnailElements[1];
    expect(secondThumbnailElement).toHaveAttribute(
      "src",
      "https://i.simpalsmedia.com/point.md/news/370x194/thumbnail2.jpg"
    );

    expect(screen.getByText("Article 1")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();

    expect(screen.getByText("Article 2")).toBeInTheDocument();
    expect(screen.getByText("Description 2")).toBeInTheDocument();

    expect(container).toMatchSnapshot();
    unmount();
  });

  test("renders loadingMore", () => {
    const mockUseArticleList = jest.fn();
    jest
      .spyOn(useArticleListModule, "useArticleList")
      .mockImplementation(mockUseArticleList);

    mockUseArticleList.mockReturnValue({
      loading: false,
      error: undefined,
      articles: mockArticlesSmall,
      loadingMore: true,
    });

    const { unmount } = render(
      <MemoryRouter>
        <ArticleListContainer />
      </MemoryRouter>
    );

    const loadingMoreElement = screen.getByText("Loading more...");
    expect(loadingMoreElement).toBeInTheDocument();
    unmount();
  });
});
