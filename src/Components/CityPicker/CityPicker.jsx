import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCounties } from '../../api';
import styles from './CityPicker.module.css';

const Counties = ({ stateCode,countryCode,handleCountiesChange }) => {
  const [County, setCounties] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setCounties(await fetchCounties(stateCode,countryCode));
    };
    fetchAPI();
  }, [stateCode,countryCode]);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountiesChange(e.target.value)}>
        <option value="">City</option>
        {County.map((county, i) => <option key={i} value={county}>{county}</option>)}
      </NativeSelect>
    </FormControl>
  );
};
export default Counties;