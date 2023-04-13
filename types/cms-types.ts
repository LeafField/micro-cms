type Reference<T, R> = T extends "get" ? R : string | null;
interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
type Structure<T, P> = T extends "get"
  ? { id: string } & DateType & Required<P>
  : T extends "gets"
  ? GetsType<{ id: string } & DateType & Required<P>>
  : Partial<DateType> & (T extends "patch" ? Partial<P> : P);

export type categories<T = "get"> = Structure<
  T,
  {
    /**
     * カテゴリ名
     */
    name: string;
    /**
     * スラッグ
     */
    slug: string;
  }
>;

export type blogs<T = "get"> = Structure<
  T,
  {
    /**
     * タイトル
     */
    title: string;
    /**
     * スラッグ
     */
    slug: string;
    /**
     * 投稿日
     */
    publishDate: string;
    /**
     * 内容
     */
    content: string;
    /**
     * アイキャッチ
     */
    eyecatch?: { url: string; width: number; height: number };
    /**
     * カテゴリ
     */
    categories: categories[];
  }
>;

export interface EndPoints {
  get: {
    categories: categories<"get">;
    blogs: blogs<"get">;
  };
  gets: {
    categories: categories<"gets">;
    blogs: blogs<"gets">;
  };
  post: {
    categories: categories<"post">;
    blogs: blogs<"post">;
  };
  put: {
    categories: categories<"put">;
    blogs: blogs<"put">;
  };
  patch: {
    categories: categories<"patch">;
    blogs: blogs<"patch">;
  };
}
