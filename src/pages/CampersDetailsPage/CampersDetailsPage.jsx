import { Suspense, useEffect, useState } from "react";
import { Discuss, DNA } from "react-loader-spinner";
import { NavLink, Outlet, useParams } from "react-router-dom";
import axios from "axios";
import styles from './CampersDetailsPage.module.css'
import sprite from '../../assets/sprite.svg'; 
import BookingForm from "../../components/BookingForm/BookingForm";
import { CamperProvider } from '../../Context/CamperContext';



export default function CampersDetailsPage() {
   axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";
   const { id } = useParams(); // Destructure the id correctly
   const [camperDetails, updateCamper] = useState(null); // Initialize as null instead of an empty array for better conditional checks
   
   const getCamper = async (id) => {
      try {
         const response = await axios.get(`/campers/${id}`);
         return response.data;
      } catch (error) {
         console.error('Error fetching camper details:', error);
         return null; // Handle error scenario
      }
   }

   useEffect(() => {
      if (id) {
         const fetchCamperDetails = async () => {
            const data = await getCamper(id);
            updateCamper(data); // Update state with fetched data
         };
         fetchCamperDetails();
      }
   }, [id]);


   return  (<CamperProvider camperData={camperDetails}>
     
      <div className={styles.camperDetailsContainer}>
         <div className={styles.detailsContainer}>
                     {camperDetails ? ( // Conditional rendering when data is available
         <>
         <h2 className={styles.camperName}>{camperDetails.name}</h2>
         <div className={styles.locationContainer}>
         <svg className={styles.starIcon} width={16} height={16} >
            <use href={`${sprite}#icon-strat_full`} /> 
         </svg>
         <p>{camperDetails.rating} ({camperDetails.reviews.length} Reviews)</p>
         <svg className={styles.mapIcon} width={16} height={16} >
            <use href={`${sprite}#icon-map`} /> 
         </svg>
         <p className={styles.location}>{camperDetails.location}</p>
         </div>
         <p className={styles.price}>&euro; {camperDetails.price}.00</p>
         <ul className={styles.galleryPreview}>
            {camperDetails.gallery.map((image) =>
            {
            return <li className={styles.itemList} key={camperDetails.thumb}>
               <img className={styles.camperImage} src={image.original} alt="" />
            </li>}
            )}
         </ul>
         <p className={styles.camperDescription}>{camperDetails.description }</p>
         </>
         
         ) : (
            <DNA/>
            )}
                     <div className={styles.subLinks}>
            <NavLink to={`/campers/${id}/features`}>Features</NavLink>
         <br />
         <NavLink to={`/campers/${id}/reviews`}>Reviews</NavLink>
         </div>
         </div>
         <div className={styles.subContainer}>
         <Suspense fallback={<Discuss />}>
            <Outlet />
         </Suspense>
         <BookingForm/>
         </div>
      </div>

          </CamperProvider>   );
}
