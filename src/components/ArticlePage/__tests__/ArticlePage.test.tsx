import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import { ArticlePage } from "../ArticlePage";

describe("ArticlePage tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders with correct title, image, and description", () => {
    const title = "Test Title";
    const image = "test-image.jpg";
    const description = "Test Description";

    const { container, unmount } = render(
      <MemoryRouter>
        <ArticlePage title={title} image={image} description={description} />
      </MemoryRouter>
    );

    expect(screen.getByText(title)).toBeTruthy();
    expect(screen.getByAltText("Big ico")).toBeTruthy();
    expect(screen.getByText(description)).toBeTruthy();

    expect(container).toMatchSnapshot();
    unmount();
  });

  test("renders BackButton", () => {
    const { container, unmount } = render(
      <MemoryRouter>
        <ArticlePage
          title="Test Title"
          image="test-image.jpg"
          description="Test Description"
        />
      </MemoryRouter>
    );

    expect(screen.getByText("Назад")).toBeTruthy();
    expect(container).toMatchSnapshot();
    unmount();
  });
});
