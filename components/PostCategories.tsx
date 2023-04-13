import React from "react";
import styles from "../styles/post-categories.module.css";
import { categories } from "../types/cms-types";
import Link from "next/link";

type Props = {
  categories: categories[];
};

const PostCategories: React.FC<Props> = ({ categories }) => {
  return (
    <ul className={styles.list}>
      {categories.map(({ name, slug }) => (
        <li key={slug}>
          <Link href={`/blog/category/${slug}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PostCategories;
