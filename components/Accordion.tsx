import React, { CSSProperties, useRef, useState } from "react";
import styles from "../styles/accordion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

type Props = {
  heading: string;
  children: React.ReactNode;
};

interface CustomCss extends React.CSSProperties {
  "--text-height": string;
}

const Accordion: React.FC<Props> = ({ heading, children }) => {
  const [textIsOpen, setTextIsOpen] = useState<boolean>(false);
  const textRef = useRef<HTMLDivElement>(null);
  const toggleText = () => {
    setTextIsOpen((prev) => !prev);
  };

  const customCss: CustomCss = {
    "--text-height": textRef.current
      ? `${textRef.current.scrollHeight}px`
      : "0px",
  };

  return (
    <div className={textIsOpen ? styles.open : styles.close}>
      <h3 className={styles.heading}>
        <button onClick={toggleText}>
          {heading}
          <FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon} />
        </button>
      </h3>
      <div className={styles.text} ref={textRef} style={customCss}>
        <div className={styles.textInner}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
