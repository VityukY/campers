import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campersOps";
import { selectedIsLoading, selectFilter, selectFilteredCampers, selectLocation } from "../../redux/selectors";
import { DNA } from "react-loader-spinner";
import styles from './CampersPaage.module.css';
import CamperCard from "../../components/CamperCard/CamperCard";
import FilterOptions from "../../components/FilterOptions/FilterOptions"; // Ensure path is correct
import sprite from '../../assets/sprite.svg'; // Ensure this path is correct
import ButtonMain from "../../components/ButtonMain/ButtonMain";
import { setLocation, setStatusFilter } from "../../redux/filterSlice";
import {stringToObject, objectToString , vehicleTypeOptions, equipmentOptions} from '../../utils/utils'


export default function CampersPage() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [location, updateLocation] = useState('');
  const filtredCampers = useSelector(selectFilteredCampers);
  const filters = useSelector(selectFilter);
  const isLoading = useSelector(selectedIsLoading);
  const locationFilter = useSelector(selectLocation)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
    }, [dispatch]);
  
  const handleLocationUpdate = (newFilters) => {
    dispatch(setLocation(newFilters));
  };

  useEffect(() => {
    if (locationFilter.length > 0) {
      updateLocation(locationFilter)
    }
  }, [location, locationFilter]);
  

  const handleFilterUpdate = (newFilters) => {
    dispatch(setStatusFilter(newFilters));
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
        {!isLoading && filtredCampers?.length === 0 && <p>No campers available</p>}
        {!isLoading && filtredCampers?.length > 0 && (
          <ul>
            {filtredCampers.map(item => (
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
