export interface ArticleItem {
  id: string;
  type: string;
  imageUrl: string;
  imageAlt?: string;
  category?: string;
  title: string;
  description?: string;
  firstPublished?: string;
  [key: string]: unknown;
}

export interface NewsSection {
  title: string;
  articles: ArticleItem[];
  [key: string]: unknown;
}

export interface MostReadItem {
  id: string;
  title: string;
  [key: string]: unknown;
}

export interface ArticleDescriptionNestedBlock {
  model?: {
    text?: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export interface ArticleDescriptionBlock {
  model?: {
    blocks?: Array<{
      model?: {
        blocks?: ArticleDescriptionNestedBlock[];
        text?: string;
        [key: string]: unknown;
      };
      [key: string]: unknown;
    }>;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export interface ArticleBodyItem {
  type: string;
  text?: string;
  url?: string;
  altText?: string;
  caption?: string;
  [key: string]: unknown;
}

export interface ArticleTopic {
  id: string;
  name: string;
  [key: string]: unknown;
}

export interface ArticleDetail {
  id?: string;
  title?: string;
  byline?: Array<{ name?: string; role?: string }>;
  firstPublished?: string;
  description?: {
    blocks?: ArticleDescriptionBlock[];
  };
  tags?: string[];
  topics?: ArticleTopic[];
  body?: ArticleBodyItem[];
  source?: string;
  sourceUrl?: string;
  link?: string;
  wordCount?: number;
  [key: string]: unknown;
}
