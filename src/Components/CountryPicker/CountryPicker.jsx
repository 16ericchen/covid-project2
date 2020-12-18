import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };
    fetchAPI();
  }, []);

const name = countries.map((country) =>country[1]);
console.log(name);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" defaultName="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option name ="" value="">Global</option>
        {countries.map((country, i) => <option key={i} name={country[0]} value={country[1]}>{country[0]}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;
