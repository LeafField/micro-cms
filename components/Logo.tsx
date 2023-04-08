import Link from "next/link";
import styles from "../styles/logo.module.css";

type Props = {
  boxOn?: boolean;
};

const Logo = ({ boxOn = false }: Props) => {
  return (
    <Link href={"/"}>
      <span className={boxOn ? styles.box : styles.basic}>CUBE</span>
    </Link>
  );
};

export default Logo;
