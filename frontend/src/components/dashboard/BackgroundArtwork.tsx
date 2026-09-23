import styles from "./Dashboard.module.css";

export function BackgroundArtwork() {
  return (
    <div className={styles.artwork} aria-hidden="true">
      <span className={`${styles.node} ${styles.nodeOne}`} />
      <span className={`${styles.node} ${styles.nodeTwo}`} />
      <span className={`${styles.node} ${styles.nodeThree}`} />
      <span className={styles.linkOne} />
      <span className={styles.linkTwo} />
    </div>
  );
}
