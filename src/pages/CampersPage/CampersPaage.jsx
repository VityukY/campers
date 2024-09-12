import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campersOps";
import { selectedCampers, selectedError, selectedIsLoading } from "../../redux/selectors";
import { DNA } from "react-loader-spinner";
import styles from './CampersPaage.module.css'
import CamperCard from "../../components/CamperCard/CamperCard";

export default function CampersPage() {
   const campers = useSelector(selectedCampers);
   const isLoading = useSelector(selectedIsLoading)
   const error = useSelector(selectedError)
   console.log('campers :>> ', campers);
   console.log('isLoading :>> ', isLoading);
   console.log('error :>> ', error);
   const dispatch = useDispatch()
   useEffect(()=>{
      dispatch(fetchCampers());
      
   }, [dispatch])
   
   return <div className={styles.campersContainer}>
      <div className={styles.filterContainer}></div>
      <div className={styles.listContainer}>
         {isLoading&&<DNA/>}
         {campers.total>0&&campers.items.map(item => {
            return <li key={item.id} className={styles.camperCard}>
               
                  <CamperCard item={item}/>

            </li>
         })}
      </div>
    
   </div>
}