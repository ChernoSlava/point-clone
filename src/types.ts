interface ArticleDto {
  id: string;
  title: {
    short: string;
  };
  thumbnail: string;
  dates: {
    posted: string;
  };
  description: {
    intro: string;
  };
}

export type { ArticleDto };
