import styles from './FeaturesIcons.module.css'
import sprite from '../../assets/sprite.svg'; // Ensure this path is correct

export default function FeaturesIcons({ item }) {
   return <>
           <ul className={styles.tagList}>
          {item.transmission === 'automatic' && (
            <li className={styles.tagListItem}>
              <svg className={styles.icon} width={143} height={48} >
                <use href={`${sprite}#icon-automatic_text`} /> {/* Corrected ID reference */}
              </svg>
            </li>
          )}
          {item.AC && (
            <li className={styles.tagListItem}>
              <svg className={styles.icon} width={87} height={48} >
                <use href={`${sprite}#icon-ac_text`} /> {/* Corrected ID reference */}
              </svg>
            </li>
         )}
         {item.bathroom && (
            <li className={styles.tagListItem}>
              <svg className={styles.icon} width={148} height={48} >
                <use href={`${sprite}#icon-bathroom_text`} /> {/* Corrected ID reference */}
              </svg>
            </li>
         )}
         {item.kitchen && (
            <li className={styles.tagListItem}>
              <svg className={styles.icon} width={123} height={48} >
                <use href={`${sprite}#icon-kitchen_text`} /> {/* Corrected ID reference */}
              </svg>
            </li>
         )}
         {item.engine==="petrol" && (
            <li className={styles.tagListItem}>
              <svg className={styles.icon} width={109} height={48} >
                <use href={`${sprite}#icon-petrol_text`} /> {/* Corrected ID reference */}
              </svg>
            </li>
         )}
         {item.radio && (
            <li className={styles.tagListItem}>
              <svg className={styles.icon} width={108} height={48} >
                <use href={`${sprite}#icon-radio_text`} /> {/* Corrected ID reference */}
              </svg>
            </li>
         )} 
        </ul></>
}