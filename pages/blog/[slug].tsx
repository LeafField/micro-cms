import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Image from "next/image";
import { getAllSlug, getPostBySlug } from "../../lib/api";
import Container from "../../components/Container";
import PostHeader from "../../components/PostHeader";
import { blogs } from "../../types/cms-types";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "../../components/TwoColumn";
import PostBody from "../../components/PostBody";
import ConvertBody from "../../components/ConvertBody";
import PostCategories from "../../components/PostCategories";
import Meta from "../../components/Meta";
import { extractText } from "../../lib/extract";
import { eyecatchLocal } from "../../lib/constant";

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getAllSlug();
  return {
    paths: slugs.map(({ slug }) => `/blog/${slug}`),
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params!.slug;

  if (!(typeof slug === "string")) return;
  const post: blogs = await getPostBySlug(slug);

  const description = extractText(post.content);
  const eyecatch = post.eyecatch ?? eyecatchLocal;

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      description: description,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const post: NextPage<Props> = ({
  title,
  content,
  categories,
  eyecatch,
  publish,
  description,
}) => {
  return (
    <Container>
      <Meta pageTitle={title} pageDesc={description} />
      <article>
        <PostHeader title={title} subtitle={"Blog Article"} publish={publish} />
        <figure>
          <Image
            alt=""
            src={eyecatch.url}
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width: 1152px) 1152px,100vw"
            priority
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>
      </article>
    </Container>
  );
};

export default post;
