import React from 'react';
// import { Cards, CountryPicker, Chart, StatePicker} from './components';
import { MyMap, Cards, CountryPicker, Chart, StatePicker, CityPicker, USChart } from './Components';
import { fetchData } from './api/';
import styles from './App.module.css';
import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    countryCode: '',
    stateCode: '',
    stateName: '',
    city: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (countryID) => {
    const changeState = 0;
    const stateName = this.state.stateCode;
    const cityName = this.state.city;
    console.log(changeState);
    console.log(countryID);
    const data = await fetchData(countryID,stateName,cityName,changeState);
    this.setState({ data,countryCode: countryID });
  }

  handleStateChange = async (stateCode,stateName) =>{
      const changeState = 1;
      console.log(stateName);
      console.log(stateCode);
      const countryCode = this.state.countryCode;
      console.log(countryCode);
      const cityName = this.state.city;
      const data = await fetchData(countryCode,stateName,cityName,changeState);
      this.setState({ data, country: countryCode, stateCode: stateCode });
    }

    handleCountiesChange = async (cityName) => {
      const changeState = 2;
      const countryName = this.state.countryCode;
      const stateName =this.state.stateCode
      const data = await fetchData(countryName, stateName, cityName, changeState);
  
      this.setState({ data, city: cityName });
    }

  render() {
    const { data, countryCode, stateCode } = this.state;
    console.log(countryCode);
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />

        <Cards data={data} />
        <h1>Country Picker</h1>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <h2>State/Province Picker</h2>
        <StatePicker countryCode = {countryCode} handleStateChange={this.handleStateChange} />
        <h2>City Picker</h2>
        <CityPicker stateCode = {stateCode} countryCode = {countryCode} handleCountiesChange={this.handleCountiesChange} />
        <Chart data={data} country={countryCode} /> 
        <h2>Cases in the US</h2>
        <USChart></USChart>
        <h2>Map</h2>
        <MyMap></MyMap>

        
        
      </div>
       
    );
  }
}

export default App;
