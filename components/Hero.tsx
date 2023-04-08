import styles from "../styles/hero.module.css";

type Props = {
  title: string;
  subtitle: string;
  imageOn?: boolean;
};

const Hero = ({ title, subtitle, imageOn = false }: Props) => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && <figure>[画像]</figure>}
    </div>
  );
};

export default Hero;
