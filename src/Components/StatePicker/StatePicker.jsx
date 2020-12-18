import React, { useState,useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountryCode } from '../../api';
import styles from './StatePicker.module.css';


const CountryCode = ({countryCode,handleStateChange}) => {
  const [data, setStates] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setStates(await fetchCountryCode(countryCode,));
    };
    fetchAPI();
  }, [countryCode]); 
      return (
        <FormControl className={styles.formControl}>
          <NativeSelect defaultValue="" defaultName ="" onChange={(e) => handleStateChange(e.target.value,[e.target.name])}>
            <option value="" name="">State/Province</option>
            {data.map((state, i) => <option key={i} name={state[0]} value={state[1]}>{state[0]}</option>)}
          </NativeSelect>
        </FormControl>
      );
};
export default CountryCode;
