import Cat from "&/svgs/cat.svg?icon";
import cat from "&/svgs/cat.svg";
import styles from "&/styles/index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Svg as components</h2>
      <Cat />
      <h2>Svg as image</h2>
      <img src={cat.src} alt="cat" />
    </div>
  );
}
