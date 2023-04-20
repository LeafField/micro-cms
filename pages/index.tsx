import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Meta from "../components/Meta";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { getAllPosts } from "../lib/api";
import { eyecatchLocal } from "../lib/constant";
import Posts from "../components/Posts";

export const getStaticProps = async () => {
  const posts = await getAllPosts(4);
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

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <Container>
      <Meta />
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />

      <Posts posts={posts} />
    </Container>
  );
};

export default Home;
