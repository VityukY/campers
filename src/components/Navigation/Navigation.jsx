import {NavLink} from 'react-router-dom'
export default function Navigation() {
   return  (<>
      <nav >
        <NavLink to="/" >
          Home
        </NavLink>
        <br />
        <NavLink to="/campers" >
          Campers page
         </NavLink>
         <br />
      </nav></>)
}