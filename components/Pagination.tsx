import React from "react";
import styles from "../styles/pagination.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = ({
  prevText = "",
  prevUrl = "",
  nextText = "",
  nextUrl = "",
}) => {
  return (
    <ul className={styles.flexContainer}>
      {prevText && prevUrl && (
        <li className={styles.prev}>
          <Link href={prevUrl}>
            <span className={styles.iconText}>
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>{prevText}</span>
            </span>
          </Link>
        </li>
      )}
      {nextText && nextUrl && (
        <li className={styles.next}>
          <span className={styles.iconText}>
            <span>{nextText}</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
