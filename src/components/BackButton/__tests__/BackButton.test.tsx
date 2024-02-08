/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { cleanup, render } from "@testing-library/react";
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
    const { container, unmount, getByText } = render(
      <MemoryRouter>
        <BackButton to="/foo" />
        <Routes>
          <Route path="/foo" element={<div>Test foo</div>} />
          <Route path="/" element={<div>Test</div>} />
        </Routes>
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
    const button = getByText("Назад");

    userEvent.click(button);
    // @ts-ignore
    expect(getByText("Test foo")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
    unmount();
  });
});
