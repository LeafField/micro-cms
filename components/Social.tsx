import React, { useEffect, useLayoutEffect, useRef } from "react";
import styles from "../styles/social.module.css";
import {
  faTwitter,
  faFacebookF,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  iconSize?: string;
};

interface CustomCss extends React.CSSProperties {
  "--icon-size": string;
}

const Social = ({ iconSize = "initial" }: Props) => {
  const customStyle: CustomCss = {
    "--icon-size": iconSize,
  };

  return (
    <ul className={styles.list} style={customStyle}>
      <li>
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebookF} />
          <span className="sr-only">Facebook</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">GitHub</span>
        </a>
      </li>
    </ul>
  );
};

export default Social;
