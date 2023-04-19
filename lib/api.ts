import { createClient } from "microcms-js-sdk";
import { GetAllPosts, GetAllSlug } from "../types/cms-types";
import { blogs } from "../types/cms-types";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN!,
  apiKey: process.env.API_KEY!,
});

export const getPostBySlug = async (slug: string) => {
  try {
    const post = await client.get({
      endpoint: "blogs",
      queries: { filters: `slug[equals]${slug}` },
    });
    return post.contents[0];
  } catch (err) {
    console.log("--getPostBySlug");
    console.log(err);
  }
};

export const getAllSlug = async (limit = 100): Promise<GetAllSlug[]> => {
  try {
    const slug = await client.get({
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

export const getAllPosts = async (limit = 100): Promise<GetAllPosts[]> => {
  try {
    const posts = await client.get({
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
      },
    ];
  }
};
