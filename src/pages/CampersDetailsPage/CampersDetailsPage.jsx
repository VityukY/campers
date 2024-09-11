import { Suspense, useEffect } from "react";
import { Discuss } from "react-loader-spinner";
import { NavLink, Outlet, useParams } from "react-router-dom";
import axios from "axios";

export default function CampersDetailsPage() {
   axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";
   const { id } = useParams(); // Destructure the id correctly

   useEffect(() => {
      if (id) {
         const deleteCamper = async () => {
            try {
               const response = await axios.delete(`/campers/${id}`);
               console.log('Deleted camper data:', response.data); // Log the data after receiving it
            } catch (error) {
               console.error('Error deleting camper:', error); // Log the error if any
            }
         };

         deleteCamper(); // Call the async function
      }
   }, [id]);

   return (
      <>
         <h1>Campers details</h1>
         <NavLink to={`/campers/${id}/features`}>features</NavLink>
         <br />
         <NavLink to={`/campers/${id}/reviews`}>reviews</NavLink>
         <Suspense fallback={<Discuss />}>
            <Outlet />
         </Suspense>
      </>
   );
}
