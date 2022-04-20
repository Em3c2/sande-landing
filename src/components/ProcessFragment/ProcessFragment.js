import styles from "./styles.module.scss";

const ProcessFragment = ({ subtitle, paragraph, number }) => {
  return (
    <div>
      <div className={styles.circleFragment}></div>
      <p className={styles.numberFragment}>{number}</p>
      <h4 className={styles.subtitleFragment}>{subtitle}</h4>
      <p className={styles.paragraph}>{paragraph}</p>
    </div>
  );
};

export default ProcessFragment;
