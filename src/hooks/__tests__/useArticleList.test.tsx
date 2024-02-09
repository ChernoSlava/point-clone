import { MockedProvider } from "@apollo/client/testing";
import { mockArticles } from "@constants/MockData";
import { renderHook } from "@testing-library/react-hooks";
import { ARTICLES_QUERY } from "@utils/index";

import { useArticleList } from "..";

const mocks = [
  {
    request: {
      query: ARTICLES_QUERY,
      variables: { skip: 0 },
    },
    result: {
      data: {
        contents: mockArticles,
      },
    },
  },
];

describe("useArticleList", () => {
  it("should fetch article list", async () => {
    const { unmount, result, waitForNextUpdate } = renderHook(
      () => useArticleList(),
      {
        wrapper: MockedProvider,
        initialProps: { mocks },
      }
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeUndefined();
    expect(result.current.articles).toHaveLength(0);
    expect(result.current.loadingMore).toBe(false);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeUndefined();
    expect(result.current.articles).toEqual(mockArticles);
    expect(result.current.loadingMore).toBe(false);

    expect(result.current).toMatchSnapshot();
    unmount();
  });
});
