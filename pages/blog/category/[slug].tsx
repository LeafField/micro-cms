import React from "react";
import Container from "../../../components/Container";
import PostHeader from "../../../components/PostHeader";
import { getAllCategoies } from "../../../lib/api";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";

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

  return {
    props: {
      name: cat.name,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const category: NextPage<Props> = ({ name }) => {
  return (
    <Container>
      <PostHeader title={name} subtitle="Blog Category" />
    </Container>
  );
};

export default category;
