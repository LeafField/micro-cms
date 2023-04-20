import Link from "next/link";
import styles from "../styles/nav.module.css";
import { useEffect, useState } from "react";

const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    setNavIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", closeNav);
  }, []);

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}

      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className="sr-only">Menu</span>
      </button>
      <ul className={styles.list}>
        <li>
          <Link href={"/"} onClick={closeNav}>
            Home
          </Link>
        </li>
        <li>
          <Link href={"/about"} onClick={closeNav}>
            About
          </Link>
        </li>
        <li>
          <Link href={"/blog"} onClick={closeNav}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
