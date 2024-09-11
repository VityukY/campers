import { Suspense } from "react";
import { Discuss } from "react-loader-spinner";
import { NavLink, Outlet } from "react-router-dom";

export default function CampersDetailsPage () {
   return <>
      <h1>Campers details</h1>
      <NavLink to="/campers/1/features" >
         features
      </NavLink>
      <br />
      <NavLink to="/campers/1/reviews" >
         reviews
      </NavLink>
         <Suspense fallback={<Discuss/>}>
            <Outlet/>
         </Suspense>
   </>
}