import styles from './ButtonMain.module.css';

export default function ButtonMain({ action, children }) {
  return (
    <button className={styles.buttonMain} onClick={action}>
      {children}
    </button>
  );
}