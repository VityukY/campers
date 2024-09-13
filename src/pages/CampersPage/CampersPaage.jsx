import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campersOps";
import { selectedCampers, selectedIsLoading } from "../../redux/selectors";
import { DNA } from "react-loader-spinner";
import styles from './CampersPaage.module.css';
import CamperCard from "../../components/CamperCard/CamperCard";
import sprite from '../../assets/sprite.svg'; // Ensure this path is correct

export default function CampersPage() {
  const [selectedOptions, setSelectedOptions] = useState(new Set());
  /*const [locationFilter, setLocationFilter] = useState(""); // For the input filter*/
  const campers = useSelector(selectedCampers);
  const isLoading = useSelector(selectedIsLoading);
  console.log('campers :>> ', campers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleOptionClick = (optionValue) => {
    setSelectedOptions(prevState => {
      const newSelectedOptions = new Set(prevState);
      if (newSelectedOptions.has(optionValue)) {
        newSelectedOptions.delete(optionValue);
      } else {
        newSelectedOptions.add(optionValue);
      }
      return newSelectedOptions;
    });
  };

  const handleLocationChange = (event) => {
    setLocationFilter(event.target.value);
  };

  const isSelected = (optionValue) => selectedOptions.has(optionValue);
/*
  // Function to filter campers based on selected options and location filter
  const filteredCampers = campers?.items.filter(item => {
    // Example filter logic: match selected options and location filter
    const matchesOptions = selectedOptions.size === 0 || selectedOptions.has(item.someOption); // Replace 'someOption' with the actual property
    const matchesLocation = locationFilter === "" || item.location.toLowerCase().includes(locationFilter.toLowerCase()); // Replace 'location' with the actual property

    return matchesOptions && matchesLocation;
  });*/

  return (
    <div className={styles.campersContainer}>
      <div className={styles.filterContainer}>
      <div className={styles.inputContainer}>
         <svg className={styles.iconWrapper} width={20} height={20}>
         <use href={`${sprite}#icon-map`} />
         </svg>
         <input
         type="text"
         className={styles.inputWithIcon}
         placeholder="City"
         onChange ={handleLocationChange}
         />
      </div>

        <p className={styles.fieldName}>Filters</p>
        <form className={styles.filterForm}>
          <h3 className={styles.filterTitle}>Vehicle equipment</h3> 
          {[ 
            { value: "option1", icon: "icon-ac", label: "AC" },
            { value: "option2", icon: "icon-diagram", label: "Automatic" },
            { value: "option3", icon: "icon-cup", label: "Kitchen" },
            { value: "option4", icon: "icon-tv", label: "TV" },
            { value: "option5", icon: "icon-drop", label: "Bathroom" }
          ].map(({ value, icon, label }) => (
            <div
              key={value}
              className={`${styles.chekboxIcon} ${isSelected(value) ? styles.selected : ''}`}
              onClick={() => handleOptionClick(value)}
            >
              <svg className={styles.icon} width={32} height={32}>
                <use href={`${sprite}#${icon}`} />
              </svg>
              <p>{label}</p>
            </div>
          ))}
        </form>

        <form className={styles.filterForm}>
          <h3 className={styles.filterTitle}>Vehicle type</h3>
          {[ 
            { value: "option6", icon: "icon-bi_grid-1x2", label: "Van" },
            { value: "option7", icon: "icon-bi_grid-3x3-gap", label: "Fully Integrated" },
            { value: "option8", icon: "icon-bi_grid", label: "Alcove" }
          ].map(({ value, icon, label }) => (
            <div
              key={value}
              className={`${styles.chekboxIcon} ${isSelected(value) ? styles.selected : ''}`}
              onClick={() => handleOptionClick(value)}
            >
              <svg className={styles.icon} width={32} height={32}>
                <use href={`${sprite}#${icon}`} />
              </svg>
              <p>{label}</p>
            </div>
          ))}
        </form>
      </div>

      <div className={styles.listContainer}>
        {isLoading && <DNA />}
        {campers.items.length > 0 && campers.items.map(item => (
          <li key={item.id} className={styles.camperCard}>
            <CamperCard item={item} />
          </li>
        ))}
      </div>
    </div>
  );
}
