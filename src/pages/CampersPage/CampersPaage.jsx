import { NavLink } from "react-router-dom";

export default function CampersPage () {
   return <>
      <h1>Campers page</h1>
      <NavLink to="/campers/1" >
         CampersDetails
      </NavLink>
   </>
}