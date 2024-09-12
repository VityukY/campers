import styles from './CamperCard.module.css'; 
import ButtonMain from '../ButtonMain/ButtonMain';
import { NavLink } from 'react-router-dom';
import sprite from '../../assets/sprite.svg'; // Ensure this path is correct

export default function CamperCard({ item }) {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImg} src={item.gallery[0].original} alt="camper" />
      <div>
        <div className={styles.titleContainer}>
          <p className={styles.name}>{item.name}</p>
          <p className={styles.price}>&euro; {item.price}.00</p>
        </div>
        <div className={styles.locationContainer}>
          <p>{item.rating} ({item.reviews.length} Reviews)</p>
          <p>{item.location}</p>
        </div>
        <p className={styles.description}>{item.description.slice(0, 53) + '...'}</p>
        <ul className={styles.tagList}>
          {item.transmission === 'automatic' && (
            <li className={styles.tagListItem}>
              <svg className={styles.icon}>
                <use href={`${sprite}#icon-automatic_text`} /> {/* Corrected ID reference */}
              </svg>
            </li>
          )}
          {item.AC && (
            <li className={styles.tagListItem}>
              <svg className={styles.icon}>
                <use href={`${sprite}#icon-ac_text`} /> {/* Corrected ID reference */}
              </svg>
            </li>
         )}
         {item.bathroom && (
            <li className={styles.tagListItem}>
              <svg className={styles.icon}>
                <use href={`${sprite}#icon-bathroom_text`} /> {/* Corrected ID reference */}
              </svg>
            </li>
         )}
         {item.kitchen && (
            <li className={styles.tagListItem}>
              <svg className={styles.icon}>
                <use href={`${sprite}#icon-kitchen_text`} /> {/* Corrected ID reference */}
              </svg>
            </li>
         )}
         {item.engine==="petrol" && (
            <li className={styles.tagListItem}>
              <svg className={styles.icon}>
                <use href={`${sprite}#icon-petrol_text`} /> {/* Corrected ID reference */}
              </svg>
            </li>
         )}
         {item.radio && (
            <li className={styles.tagListItem}>
              <svg className={styles.icon}>
                <use href={`${sprite}#icon-radio_text`} /> {/* Corrected ID reference */}
              </svg>
            </li>
         )} 
         {item.bathroom && (
            <li className={styles.tagListItem}>
              <svg className={styles.icon}>
                <use href={`${sprite}#icon-bathroom_text`} /> {/* Corrected ID reference */}
              </svg>
            </li>
         )}         
        </ul>
        <NavLink to={`/campers/${item.id}`}>
          <ButtonMain className={styles.moreBtn}>Show More</ButtonMain>
        </NavLink>
      </div>
    </div>
  );
}
