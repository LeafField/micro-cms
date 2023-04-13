import { InferGetStaticPropsType, NextPage } from "next";
import Image from "next/image";
import { getPostBySlug } from "../../lib/api";
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

export const getStaticProps = async () => {
  const slug = "schedule";
  const post: blogs = await getPostBySlug(slug);

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const schedule: NextPage<Props> = ({
  title,
  content,
  categories,
  eyecatch,
  publish,
}) => {
  return (
    <Container>
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

export default schedule;
