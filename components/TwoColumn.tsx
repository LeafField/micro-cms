import styles from "../styles/two-column.module.css";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const TwoColumn = ({ children }: Props) => {
  return <div className={styles.flexContainer}>{children}</div>;
};

export const TwoColumnMain = ({ children }: Props) => {
  return <div className={styles.main}>{children}</div>;
};

export const TwoColumnSidebar = ({ children }: Props) => {
  return <div className={styles.sidebar}>{children}</div>;
};
