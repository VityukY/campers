import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campersOps";
import { selectedIsLoading, selectFilter, selectFilteredCampers, selectLocation } from "../../redux/selectors";
import styles from './CampersPaage.module.css';
import CamperCard from "../../components/CamperCard/CamperCard";
import FilterOptions from "../../components/FilterOptions/FilterOptions";
import sprite from '../../assets/sprite.svg'; 
import ButtonMain from "../../components/ButtonMain/ButtonMain";
import { setLocation, setStatusFilter } from "../../redux/filterSlice";
import {stringToObject, objectToString , vehicleTypeOptions, equipmentOptions} from '../../utils/utils'
import Loader from "../../components/Loader/Loader";
import { resetFilteredCampers } from "../../redux/campersSlice";


export default function CampersPage() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [location, updateLocation] = useState('');
  const filtredCampers = useSelector(selectFilteredCampers);
  const filters = useSelector(selectFilter);
  const isLoading = useSelector(selectedIsLoading);
  const locationFilter = useSelector(selectLocation)
  const dispatch = useDispatch();
  const [visibleCampers, setVisibleCampers] = useState(4);
  const campersToDisplay = filtredCampers.slice(0, visibleCampers);
  const loadMoreCampers = () => {
  setVisibleCampers(prevVisible => prevVisible + 4);
};
  useEffect(() => {
    dispatch(fetchCampers());
    }, [dispatch]);
  useEffect(() => {
  setVisibleCampers(4);
  }, [filtredCampers, filters]);
  
  const handleLocationUpdate = (newFilters) => {
    dispatch(setLocation(newFilters));
    dispatch(resetFilteredCampers());

  };

  useEffect(() => {
    if (locationFilter.length > 0) {
      updateLocation(locationFilter)
    }
  }, [location, locationFilter]);
  

  const handleFilterUpdate = (newFilters) => {
    dispatch(setStatusFilter(newFilters));
    dispatch(resetFilteredCampers());

  };
    const handleLocationChange = (event) => {
    updateLocation(event.target.value);
    handleLocationUpdate(event.target.value);
  };

  useEffect(() => {
    if (filters.length > 0) {
      const initialOptions = filters.map(filter => objectToString(filter));
      setSelectedOptions(initialOptions);
    }
  }, [filters]);
  const filterHandler = () => {
    const filterParams = selectedOptions.map(option => stringToObject(option));

    handleFilterUpdate(filterParams)
  };
    
  const handleOptionClick = (optionValue) => {
  setSelectedOptions((prevState) => {
    if (prevState.includes(optionValue)) {
      return prevState.filter((option) => option !== optionValue);
    } else {
      return [...prevState, optionValue];
    }
  });
};

const isSelected = (optionValue) => selectedOptions.includes(optionValue);


  return (
    <div className={styles.campersContainer}>
      <div className={styles.filterContainer}>
        <p className={styles.locationLabel}>Location</p>
        <div className={styles.inputContainer}>
          <svg className={styles.iconWrapper} width={20} height={20}>
            <use href={`${sprite}#icon-map`} />
          </svg>
          <input
            type="text"
            className={styles.inputWithIcon}
            placeholder="City"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        <p className={styles.fieldName}>Filters</p>
        <FilterOptions
          title="Vehicle equipment"
          options={equipmentOptions}
          handleOptionClick={handleOptionClick}
          isSelected={isSelected}
          multiple='true'
        />
        <FilterOptions
          title="Vehicle type"
          options={vehicleTypeOptions}
          handleOptionClick={handleOptionClick}
          isSelected={isSelected}
          multiple='false'
        />
        <div className={styles.searchButton}>
          <ButtonMain  action ={filterHandler}>Search</ButtonMain>
        </div>
        
      </div>

      <div className={styles.listContainer}>
        {isLoading && <Loader/>}
        {!isLoading && campersToDisplay?.length === 0 && <h3 className={styles.noCampers}>No available camper</h3>}
        {!isLoading && campersToDisplay?.length > 0 && (
          <ul className={styles.listContainer}>
            {campersToDisplay.map(item => (
              <li key={item.id} className={styles.camperCard}>
                <CamperCard item={item} />
              </li>
            ))}
          </ul>
          
        )}
        {!isLoading && filtredCampers.length > visibleCampers && (
          <button className={styles.loadMoreButton} onClick={loadMoreCampers}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
