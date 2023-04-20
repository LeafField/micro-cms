import { createClient } from "microcms-js-sdk";
import { GetAllSlug, categories } from "../types/cms-types";
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
    console.log(err);
    throw new Error("--getPostBySlug--");
  }
};

export const getAllSlug = async (limit = 100): Promise<blogs[]> => {
  try {
    const slug = await client.get<blogs<"gets">>({
      endpoint: "blogs",
      queries: { fields: "title,slug", orders: "-publishDate", limit: limit },
    });
    return slug.contents;
  } catch (err) {
    console.log(err);
    throw new Error("--getAllSlugs--");
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
    console.log(err);
    throw new Error("--getAllPosts--");
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
    throw new Error("--getAllCategories--");
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
    console.log(err);
    throw new Error("--getAllPostsByCategory--");
  }
};
