import styles from './FeaturesIcons.module.css'
import sprite from '../../assets/sprite.svg';

export default function FeaturesIcons({ item }) {
   return <>
           <ul className={styles.tagList}>
          {item.transmission === 'automatic' && (
            <li className={styles.tagListItem}>
              <svg className={styles.icon} width={143} height={48} >
                <use href={`${sprite}#icon-automatic_text`} /> 
              </svg>
            </li>
          )}
          {item.AC && (
            <li className={styles.tagListItem}>
              <svg className={styles.icon} width={87} height={48} >
                <use href={`${sprite}#icon-ac_text`} /> 
              </svg>
            </li>
         )}
         {item.bathroom && (
            <li className={styles.tagListItem}>
              <svg className={styles.icon} width={148} height={48} >
                <use href={`${sprite}#icon-bathroom_text`} />
              </svg>
            </li>
         )}
         {item.kitchen && (
            <li className={styles.tagListItem}>
              <svg className={styles.icon} width={123} height={48} >
                <use href={`${sprite}#icon-kitchen_text`} /> 
              </svg>
            </li>
         )}
         {item.engine==="petrol" && (
            <li className={styles.tagListItem}>
              <svg className={styles.icon} width={109} height={48} >
                <use href={`${sprite}#icon-petrol_text`} /> 
              </svg>
            </li>
         )}
         {item.radio && (
            <li className={styles.tagListItem}>
              <svg className={styles.icon} width={108} height={48} >
                <use href={`${sprite}#icon-radio_text`} />
              </svg>
            </li>
         )} 
        </ul></>
}