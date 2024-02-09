import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { debounce } from "lodash";

import { ArticleDto } from "../types";
import { ARTICLES_QUERY } from "../utils";

export const useArticleList = () => {
  const { loading, error, data, fetchMore } = useQuery(ARTICLES_QUERY, {
    variables: { skip: 0 },
    fetchPolicy: "cache-and-network",
  });

  const [articles, setArticles] = useState<ArticleDto[]>([]);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  useEffect(() => {
    if (!loading && data && data.contents) {
      setArticles(data.contents);
    }
  }, [loading, data]);

  const loadMore = async () => {
    if (loadingMore) return;
    try {
      setLoadingMore(true);
      const result = await fetchMore({
        variables: {
          skip: articles.length,
        },
      });
      const newArticles = result.data.contents;
      setArticles((prevArticles) => [...prevArticles, ...newArticles]);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Error loading more articles:", err);
    } finally {
      setLoadingMore(false);
    }
  };

  const handleScroll = debounce(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 500) {
      loadMore();
    }
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { loading, error, articles, loadingMore, loadMore };
};
