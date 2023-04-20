import React from "react";
import Container from "../../../components/Container";
import PostHeader from "../../../components/PostHeader";
import { getAllCategoies, getAllPostsByCategory } from "../../../lib/api";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { eyecatchLocal } from "../../../lib/constant";
import Posts from "../../../components/Posts";
import Meta from "../../../components/Meta";

export const getStaticPaths: GetStaticPaths = async () => {
  const allCats = await getAllCategoies();

  return {
    paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const catSlug = context.params!.slug;
  const allCats = await getAllCategoies();
  const cat = allCats.find(({ slug }) => slug === catSlug)!;

  const posts = await getAllPostsByCategory(cat.id);

  posts.forEach((post) => {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
  });

  return {
    props: {
      name: cat.name,
      posts,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const category: NextPage<Props> = ({ name, posts }) => {
  return (
    <Container>
      <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
      <PostHeader title={name} subtitle="Blog Category" />
      <Posts posts={posts} />
    </Container>
  );
};

export default category;
