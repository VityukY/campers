import { Suspense, useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import axios from "axios";
import styles from './CampersDetailsPage.module.css';
import sprite from '../../assets/sprite.svg'; 
import BookingForm from "../../components/BookingForm/BookingForm";
import { CamperProvider } from '../../Context/CamperContext';
import Loader from "../../components/Loader/Loader";

export default function CampersDetailsPage() {
   axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";
   const { id } = useParams();
   const [camperDetails, updateCamper] = useState(null);
   const [loading, setLoading] = useState(true);

   const getCamper = async (id) => {
      try {
         const response = await axios.get(`/campers/${id}`);
         return response.data;
      } catch (error) {
         console.error('Error fetching camper details:', error);
         return null;
      }
   }

   useEffect(() => {
      if (id) {
         const fetchCamperDetails = async () => {
            const data = await getCamper(id);
            updateCamper(data);
            setLoading(false);
         };
         fetchCamperDetails();
      }
   }, [id]);

   if (loading) {
      return (
         <Loader/>
      );
   }

   return (
      <CamperProvider camperData={camperDetails}>
         <div className={styles.camperDetailsContainer}>
            <div className={styles.detailsContainer}>
               {camperDetails ? (
                  <>
                     <h2 className={styles.camperName}>{camperDetails.name}</h2>
                     <div className={styles.locationContainer}>
                        <svg className={styles.starIcon} width={16} height={16}>
                           <use href={`${sprite}#icon-strat_full`} /> 
                        </svg>
                        <p>{camperDetails.rating} ({camperDetails.reviews.length} Reviews)</p>
                        <svg className={styles.mapIcon} width={16} height={16}>
                           <use href={`${sprite}#icon-map`} /> 
                        </svg>
                        <p className={styles.location}>{camperDetails.location.split(', ').reverse().join(', ')}</p>
                     </div>
                     <p className={styles.price}>&euro; {camperDetails.price}.00</p>
                     <ul className={styles.galleryPreview}>
                        {camperDetails.gallery.map((image) => (
                           <li className={styles.itemList} key={image.original}>
                              <img className={styles.camperImage} src={image.original} alt="" />
                           </li>
                        ))}
                     </ul>
                     <p className={styles.camperDescription}>{camperDetails.description}</p>
                  </>
               ) : (
                     <Loader/>
               )}
               <div className={styles.subLinks}>
                  <NavLink
                     to={`/campers/${id}/features`}
                     className={({ isActive }) => isActive ? styles.activeLink : undefined}
                  >
                     Features
                  </NavLink>
                  <br />
                  <NavLink
                     to={`/campers/${id}/reviews`}
                     className={({ isActive }) => isActive ? styles.activeLink : undefined}
                  >
                     Reviews
                  </NavLink>
               </div>
            </div>
            <div className={styles.subContainer}>
               <Suspense fallback={<Loader/>}>
                  <Outlet />
               </Suspense>
               <BookingForm />
            </div>
         </div>
      </CamperProvider>
   );
}
