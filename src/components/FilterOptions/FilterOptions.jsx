import styles from './FilterOptions.module.css'; // Ensure the styles file exists
import sprite from '../../assets/sprite.svg'; // Adjust the path if needed

export default function FilterOptions ({ title, options, handleOptionClick, isSelected }) {
  return (
    <form className={styles.filterForm}>
      <h3 className={styles.filterTitle}>{title}</h3>
      {options.map(({ value, icon, label }) => (
        <div
          key={value}
          className={`${styles.chekboxIcon} ${isSelected(value) ? styles.selected : ''}`}
          onClick={() => handleOptionClick(value)}
        >
          <svg className={styles.icon} width={32} height={32}>
            <use href={`${sprite}#${icon}`} />
          </svg>
          <p>{label}</p>
        </div>
      ))}
    </form>
  );
};

