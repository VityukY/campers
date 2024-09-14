import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campersOps";
import { selectedCampers, selectedIsLoading, selectFilteredCampers } from "../../redux/selectors";
import { DNA } from "react-loader-spinner";
import styles from './CampersPaage.module.css';
import CamperCard from "../../components/CamperCard/CamperCard";
import FilterOptions from "../../components/FilterOptions/FilterOptions"; // Ensure path is correct
import sprite from '../../assets/sprite.svg'; // Ensure this path is correct
import ButtonMain from "../../components/ButtonMain/ButtonMain";
import { setStatusFilter } from "../../redux/filterSlice";



export default function CampersPage() {
const [selectedOptions, setSelectedOptions] = useState(new Set());
  const campers = useSelector(selectedCampers);
  const filtredCampers = useSelector(selectFilteredCampers)
  const isLoading = useSelector(selectedIsLoading);
  const dispatch = useDispatch();

  const [locationFilter, setLocationFilter] = useState(""); 


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
const filterHandler = () => {
  try {
    const filterArray = Array.from(selectedOptions);
    const filter = filterArray.map(option => {
      const [key, value] = option.split(' ');
      const booleanValue = value === 'true' ? true : (value === 'false' ? false : value);

      return {
        [key]: booleanValue
      };
    });
    console.log('filter :>> ', filter);
    dispatch(setStatusFilter(filter));  
  } catch (error) {
    console.error("Error in filterHandler:", error);
  }
};

    

  
  const isSelected = (optionValue) => selectedOptions.has(optionValue);
    const handleLocationChange = (event) => {
    setLocationFilter(event.target.value);
  };
  const equipmentOptions = [
    { value: "AC true", icon: "icon-ac", label: "AC" },
    { value: "transmission automatic", icon: "icon-diagram", label: "Automatic" },
    { value: "kitchen true", icon: "icon-cup", label: "Kitchen" },
    { value: "TV true", icon: "icon-tv", label: "TV" },
    { value: "Bathroom true", icon: "icon-drop", label: "Bathroom" }
  ];

  const vehicleTypeOptions = [
    { value: "form van", icon: "icon-bi_grid-1x2", label: "Van" },
    { value: "form fullyIntegrated", icon: "icon-bi_grid-3x3-gap", label: "Fully Integrated" },
    { value: "form alcove", icon: "icon-bi_grid", label: "Alcove" }
  ];

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
            onChange={handleLocationChange}
          />
        </div>

        <p className={styles.fieldName}>Filters</p>
        <FilterOptions
          title="Vehicle equipment"
          options={equipmentOptions}
          handleOptionClick={handleOptionClick}
          isSelected={isSelected}
        />
        <FilterOptions
          title="Vehicle type"
          options={vehicleTypeOptions}
          handleOptionClick={handleOptionClick}
          isSelected={isSelected}
        />
        <ButtonMain action ={filterHandler}>Search</ButtonMain>
      </div>

      <div className={styles.listContainer}>
        {isLoading && <DNA />}
        {!isLoading && filtredCampers.items?.length === 0 && <p>No campers available</p>}
        {!isLoading && filtredCampers.items?.length > 0 && (
          <ul>
            {filtredCampers.items.map(item => (
              <li key={item.id} className={styles.camperCard}>
                <CamperCard item={item} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
