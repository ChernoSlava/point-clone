import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { ArticlePageContainer } from "..";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: {
      articleTitle: "Test Title",
      image: "test-image.jpg",
      description: "Test Description",
    },
  }),
}));
describe("ArticlePageContainer tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders ArticlePage with correct props", () => {
    const { container, unmount } = render(
      <MemoryRouter>
        <ArticlePageContainer />
      </MemoryRouter>
    );

    const imgElement = screen.getByRole("img", { name: "Big ico" });
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "test-image.jpg");

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();

    expect(container).toMatchSnapshot();
    unmount();
  });
});
