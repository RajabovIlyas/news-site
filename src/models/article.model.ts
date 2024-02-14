export interface ArticleModel {
  source: {
    id: null | string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface ArticleReq {
  status: string;
  totalResults: number;
  articles: ArticleModel[];
}
