export interface BlogMeta {
  releaseDate: string;
  description: string;
  tags: string[];
  _id: string;
  title: string;
  slug: {
    _type: string;
    current: string;
  };
  readingTime: string;
  views: number;
  image: string;
}

export interface BlogItem extends BlogMeta {
  content: string;
}

export interface Headings {
  level: number;
  text: string;
  headingId: string;
}
