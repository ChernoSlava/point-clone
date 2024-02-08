/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { MemoryRouter } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { cleanup, render } from "@testing-library/react";

import { AppLayout } from "../AppLayout";

describe("AppLayout tests", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders without children", () => {
    const { container, unmount } = render(
      <MemoryRouter>
        <AppLayout logo="test" />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
    unmount();
  });

  test("renders with children", () => {
    const { container, unmount } = render(
      <MemoryRouter>
        <AppLayout logo="test">
          <div>foo</div>
        </AppLayout>
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
    unmount();
  });
});
