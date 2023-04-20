import React from "react";
import { blogs } from "../types/cms-types";
import styles from "../styles/posts.module.css";
import Link from "next/link";
import { GetAllPosts } from "../types/cms-types";
import Image from "next/image";

type Props = {
  posts: blogs[];
};

const Posts: React.FC<Props> = ({ posts }) => {
  console.log(posts[0].eyecatch.url);
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch }) => (
        <article className={styles.post} key={slug}>
          <Link href={`/blog/${slug}`}>
            <figure>
              <Image
                src={eyecatch.url}
                alt=""
                fill
                style={{
                  objectFit: "cover",
                }}
                sizes="(min-width:1152px) 576px,50vw"
                priority
              />
            </figure>
            <h2>{title}</h2>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default Posts;
