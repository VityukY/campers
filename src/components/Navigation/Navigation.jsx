import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

export default function Navigation() {
  return (
    <div className={styles.NavigationContainer}>
      <p>Travel<span>Trucks</span></p>
      <nav>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? styles.activeLink : undefined}
        >
          Home
        </NavLink>
        <br />
        <NavLink 
          to="/campers" 
          className={({ isActive }) => isActive ? styles.activeLink : undefined}
        >
          Catalog
        </NavLink>
        <br />
      </nav>
    </div>
  )
}
