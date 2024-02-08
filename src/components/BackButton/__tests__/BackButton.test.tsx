import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BackButton } from "../BackButton";

describe("BackButton tests", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders without errors", () => {
    const { container, unmount } = render(
      <MemoryRouter>
        <BackButton />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
    unmount();
  });

  test("should click and go to /foo", () => {
    const { container, unmount } = render(
      <MemoryRouter>
        <BackButton to="/foo" />
        <Routes>
          <Route path="/foo" element={<div>Test foo</div>} />
          <Route path="/" element={<div>Test</div>} />
        </Routes>
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
    const button = screen.getByText("Назад");

    userEvent.click(button);
    expect(screen.getByText("Test foo")).toBeTruthy();
    expect(container).toMatchSnapshot();
    unmount();
  });
});
