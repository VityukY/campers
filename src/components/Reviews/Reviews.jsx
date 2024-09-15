import { useCamper } from '../../Context/CamperContext'; 
import styles from './Reviews.module.css'
import sprite from '../../assets/sprite.svg'; 
import Loader from '../Loader/Loader';


export default function Reviews() {
  const camperDetails = useCamper(); 
  const renderStars = (rating) => {

    const filledStars = Array.from({ length: rating }, (_, i) =>
    (
      <svg key={`filled-${i}`} className={styles.starIcon} width={16} height={16}>
        <use href={`${sprite}#icon-strat_full`} />
      </svg>
    ));
    const emptyStars = Array.from({ length: 5 - rating }, (_, i) => (
      <svg key={`empty-${i}`} className={styles.starIcon} width={16} height={16}>
        <use href={`${sprite}#icon-star`} />
      </svg>
    ));

    return [...filledStars, ...emptyStars];
  };


  if (!camperDetails) {
    <Loader />
    
  }
  return (
    <div className={styles.reviewContainer}>
      {camperDetails.reviews ? (
        camperDetails.reviews.map(review => {
          return <div key={review.reviewer_name}>
            <div className={styles.reviewCard}>
            <h3 className={styles.nameLogo}>{review.reviewer_name.slice(0, 1)}</h3>
            <div>
              <p className={styles.reviewAuthor}>{review.reviewer_name}</p> 
              {renderStars(review.reviewer_rating)}
            </div>
            <p className={styles.reviewComment}>{review.comment}</p>
          
            </div>
          </div>
      })
      ) : (
          <h3>No reviews yet! Be first!</h3>
      )}
      
    </div>
  );
}
