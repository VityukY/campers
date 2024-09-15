import { NavLink } from 'react-router-dom'
import ButtonMain from '../../components/ButtonMain/ButtonMain'
import styles from './HomePage.module.css'
export default function HomePage() {
   
   return <div className={styles.container}>
      
      <h1 className={styles.heroTitle}>Campers of your dreams</h1>
      <h2 className={styles.heroText}>You can find everything you want in our catalog</h2>
      
      <NavLink className={styles.heroLink} to="/campers" >
         <ButtonMain>View Now</ButtonMain>
      </NavLink>
   </div>
}