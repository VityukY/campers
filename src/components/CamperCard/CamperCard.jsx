import styles from './CamperCard.module.css'; 
import ButtonMain from '../ButtonMain/ButtonMain';
import { NavLink } from 'react-router-dom';
import sprite from '../../assets/sprite.svg'; // Ensure this path is correct
import FeaturesIcons from '../FeaturesIcons/FeaturesIcons';

export default function CamperCard({ item }) {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImg} src={item.gallery[0].original} alt="camper" />
      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <p className={styles.name}>{item.name.length>30?item.name.slice(0,21)+"...":item.name}</p>
          <p className={styles.price}>&euro; {item.price}.00</p>
          <svg className={styles.heartIcon} width={24} height={24} >
            <use href={`${sprite}#icon-heart_empty`} /> 
          </svg>
        </div>
        <div className={styles.locationContainer}>
          <svg className={styles.starIcon} width={16} height={16} >
            <use href={`${sprite}#icon-strat_full`} /> 
          </svg>
          <p>{item.rating} ({item.reviews.length} Reviews)</p>
          <svg className={styles.mapIcon} width={16} height={16} >
            <use href={`${sprite}#icon-map`} /> 
          </svg>
          <p className={styles.location}>{item.location}</p>
        </div>
        <p className={styles.description}>{item.description.slice(0, 53) + '...'}</p>

         <FeaturesIcons item={item}/>
    <div className={styles.linkWrapper}>
      <NavLink to={`/campers/${item.id}/features`}>
        <ButtonMain className={styles.moreBtn}>Show More</ButtonMain>
      </NavLink>
    </div>

      </div>
    </div>
  );
}
