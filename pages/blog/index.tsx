import React from "react";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Meta from "../../components/Meta";
import { getAllPosts } from "../../lib/api";
import { InferGetStaticPropsType, NextPage } from "next";
import Posts from "../../components/Posts";
import { eyecatchLocal } from "../../lib/constant";

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  posts.forEach((post) => {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
  });
  return {
    props: {
      posts,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Brog: NextPage<Props> = ({ posts }) => {
  return (
    <Container>
      <Meta pageTitle="ブログ" />
      <Hero title="Blog" subtitle="Recent Posts" />
      <Posts posts={posts} />
    </Container>
  );
};

export default Brog;
