import styles from "./themetoggle.module.css";

export default function ThemeToggle() {
  return (
    <div className={styles.container}>
      <div className={styles.moon}>🌙</div>
      <div className={styles.indicator}></div>
      <div className={styles.sun}>😎</div>
    </div>
  );
}
