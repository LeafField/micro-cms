import { createClient } from "microcms-js-sdk";
import { GetAllPosts, GetAllSlug, categories } from "../types/cms-types";
import { blogs } from "../types/cms-types";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN!,
  apiKey: process.env.API_KEY!,
});

export const getPostBySlug = async (slug: string): Promise<blogs> => {
  try {
    const post = await client.get<blogs<"gets">>({
      endpoint: "blogs",
      queries: { filters: `slug[equals]${slug}` },
    });
    return post.contents[0];
  } catch (err) {
    console.log("--getPostBySlug");
    console.log(err);
    return {
      id: "",
      title: "",
      slug: "",
      publishDate: "",
      content: "",
      categories: [],
      eyecatch: { url: "", width: 0, height: 0 },
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
      revisedAt: "",
    };
  }
};

export const getAllSlug = async (limit = 100): Promise<GetAllSlug[]> => {
  try {
    const slug = await client.get<blogs<"gets">>({
      endpoint: "blogs",
      queries: { fields: "title,slug", orders: "-publishDate", limit: limit },
    });
    return slug.contents;
  } catch (err) {
    console.log("--getAllSlugs--");
    console.log(err);
    return [
      {
        title: "エラー",
        slug: "エラー",
      },
    ];
  }
};

export const getAllPosts = async (limit = 100): Promise<blogs[]> => {
  try {
    const posts = await client.get<blogs<"gets">>({
      endpoint: "blogs",
      queries: {
        fields: "title,slug,eyecatch",
        orders: "-publishDate",
        limit: limit,
      },
    });
    return posts.contents;
  } catch (err) {
    console.log("--getAllPosts--");
    console.log(err);
    return [
      {
        title: "エラー",
        slug: "error",
        eyecatch: {
          height: 0,
          url: "エラー",
          width: 0,
        },
        categories: [
          {
            createdAt: "",
            id: "",
            name: "",
            publishedAt: "",
            revisedAt: "",
            slug: "",
            updatedAt: "",
          },
        ],
        content: "",
        createdAt: "",
        id: "",
        publishDate: "",
        publishedAt: "",
        revisedAt: "",
        updatedAt: "",
      },
    ];
  }
};

export const getAllCategoies = async (limit = 100): Promise<categories[]> => {
  try {
    const categories = await client.get<categories<"gets">>({
      endpoint: "categories",
      queries: {
        fields: "name,id,slug",
        limit: limit,
      },
    });
    return categories.contents;
  } catch (err) {
    console.log("--getAllCategories--");
    console.log(err);
    return [
      {
        name: "",
        id: "",
        slug: "",
        createdAt: "",
        publishedAt: "",
        revisedAt: "",
        updatedAt: "",
      },
    ];
  }
};

export const getAllPostsByCategory = async (
  catID: categories["id"],
  limit = 100
): Promise<blogs[]> => {
  try {
    const posts = await client.get<blogs<"gets">>({
      endpoint: "blogs",
      queries: {
        filters: `categories[contains]${catID}`,
        fields: "title,slug,eyecatch",
        orders: "-publishDate",
        limit: limit,
      },
    });
    return posts.contents;
  } catch (err) {
    console.log("--getAllPostsByCategory--");
    console.log(err);
    return [
      {
        title: "",
        id: "",
        slug: "",
        revisedAt: "",
        eyecatch: {
          height: 0,
          width: 0,
          url: "",
        },
        categories: [
          {
            name: "",
            id: "",
            updatedAt: "",
            createdAt: "",
            publishedAt: "",
            revisedAt: "",
            slug: "",
          },
        ],
        createdAt: "",
        publishDate: "",
        publishedAt: "",
        updatedAt: "",
        content: "",
      },
    ];
  }
};
