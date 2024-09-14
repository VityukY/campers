// src/components/Reviews/Reviews.jsx
import { useCamper } from '../../redux/CamperContext'; // Імпортуємо хук
import styles from './Reviews.module.css'
export default function Reviews() {
  const camperDetails = useCamper(); // Отримуємо дані про кемпера

  if (!camperDetails) {
    return <p>Loading...</p>; // Якщо даних ще немає, показуємо повідомлення
  }
  return (
    <div className={styles.reviewContainer}>
      {camperDetails.reviews ? (
        camperDetails.reviews.map(review => {
          return <>
            <div className={styles.reviewCard}>
            <h3 className={styles.nameLogo}>{review.reviewer_name.slice(0, 1)}</h3>
            <div>
              <p className={styles.reviewAuthor}>{review.reviewer_name}</p> 
              <p>{review.reviewer_rating} stars</p>
            </div>
            <p className={styles.reviewComment}>{review.comment}</p>
          
            </div>
          </>
      })
      ) : (
          <h3>Reviews not available</h3>
      )}
      
    </div>
  );
}
