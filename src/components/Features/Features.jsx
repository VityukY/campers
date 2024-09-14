// src/components/Features/Features.jsx
import { useCamper } from '../../redux/CamperContext'; // Імпортуємо хук
import FeaturesIcons from '../FeaturesIcons/FeaturesIcons';
import styles from './Features.module.css'

export default function Features() {
  const camperDetails = useCamper(); // Отримуємо дані про кемпера

  if (!camperDetails) {
    return <p>Loading...</p>; // Якщо даних ще немає, показуємо повідомлення
  }

  return (
    <div className={styles.featuresContainer}>
       <FeaturesIcons item={camperDetails}/>
        <div className={styles.detailsContainer}>
           <h3 className={styles.FeatureSubtitle}>Vehicle Details</h3>
           <ul className={styles.featureList}>
              <li className={styles.featureListItem}><span>Form</span> {camperDetails.form}</li>
              <li className={styles.featureListItem}><span>Length</span> {camperDetails.length}</li>
              <li className={styles.featureListItem}><span>Width</span> {camperDetails.width}</li>
              <li className={styles.featureListItem}><span>Height</span> {camperDetails.height}</li>
              <li className={styles.featureListItem}><span>Tank</span> {camperDetails.tank}</li>
              <li className={styles.featureListItem}><span>Consumption</span> {camperDetails.consumption}</li>
         </ul>
        </div> 
    </div>
  );
}
