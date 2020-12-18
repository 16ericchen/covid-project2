import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';
//const url = `https://disease.sh/v3/covid-19/historical/all?lastdays=all`;

//MTNsSXpHOGNWZDh5dE1LaDRxczNhWjNUSHJWc2NMc2I5OUVnR3c4Ng==


export const fetchUSData = async () => {
  let changeableUrl = `https://disease.sh/v3/covid-19/states?sort=cases&yesterday=true&allowNull=true`;
    
    try {
      const {data} = await axios.get(changeableUrl);
      return data.map(({ state, cases, todayCases, deaths, todayDeaths, recovered, casesPerOneMillion, tests, testsPerOneMillion, population}) => ({ State: state, Cases: cases, CasesToday: todayCases, Deaths: deaths, DeathsToday: todayDeaths, Recovered: recovered, CasesPerMillion: casesPerOneMillion, Tests: tests, TestsPerMillion: testsPerOneMillion, Population: population }));
    } catch (error) {
      return error;
    }
  };
  export const fetchUsStateName = async () => {
    let changeableUrl = `https://disease.sh/v3/covid-19/states?sort=cases&yesterday=true&allowNull=true`;
      
      try {
        const {data} = await axios.get(changeableUrl);
        return data.map(({ state}) => ({ State: state}));
      } catch (error) {
        return error;
      }
    };
    export const fetchUsCases = async () => {
      let changeableUrl = `https://disease.sh/v3/covid-19/states?sort=cases&yesterday=true&allowNull=true`;
        
        try {
          const {data} = await axios.get(changeableUrl);
          return data.map(({cases}) => ({Cases: cases}));
        } catch (error) {
          return error;
        }
      };


export const fetchData = async (country,state,city,changeState) => {
  let changeableUrl = url;
  if (changeState === 0) 
    {
    changeableUrl = `${url}/countries/${country}`;
    try {
      const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
      console.log({ confirmed, recovered, deaths, lastUpdate });
      return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
      return error;
    }
    }
  if(changeState === 1 )
    {
  try {
  
    const { data: { timeline:  { cases, deaths, recovered } } } = await axios.get(`https://disease.sh/v3/covid-19/historical/${country}/${state}?lastdays=all`);

    return { cases, deaths, recovered };
  } catch (error) {
    return error;
  }
    }
  if(changeState === 2)
    {
      try {
        const { data: { confirmed, dead, recovered, updated } } = await axios.get(`www.trackcorona.live/api/cities/${city}`);
        return { confirmed, dead, recovered, updated };
      } catch (error) {
        return error;
      }
    }
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

// export const fetchDailyData = async (country) => {
// let changeableUrl = `${url}`;
//   if (country) {
//     changeableUrl = `https://api.covid19api.com/total/dayone/country/${country}`;
//   }
//   try {
//     const {data} = await axios.get(changeableUrl);
//     if(country){
//       return data.map(({ Confirmed, Deaths, Recovered, Date:date }) => ({ cases: Confirmed, Deaths: Deaths, Recovered: Recovered, date }));
//     }
//   else{
//     return data.map(({ confirmed, deaths,recovered, reportDate: date }) => ({ Cases: confirmed.total, Deaths: deaths.total, Recovered: recovered.totalRecovered,date }));
//   }
//   } catch (error) {
//     return error;
//   }
// };
export const fetchDailyData = async (country) => {
  let changeableUrl = `${url}/daily`;
    if (country) {
      changeableUrl = `https://api.covid19api.com/total/dayone/country/${country}`;
    }
    try {
      const {data} = await axios.get(changeableUrl);
      console.log(await axios.get(changeableUrl));
      if(country){
        const modifiedData = data.map(({ Confirmed, Deaths, Recovered, Date:date }) => ({ Confirmed: Confirmed, Deaths: Deaths, Recovered: Recovered, date }));
        return modifiedData;
      }
    else{
      console.log(data);
      return data.map(({ confirmed, deaths,recovered, reportDate: date }) => ({ Confirmed: confirmed.total, Deaths: deaths.total, Recovered: recovered.totalRecovered,date }));
    }
      
    } catch (error) {
      return error;
    }
  };

export const fetchCountries = async () => {
  try {
    const { data }  = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.countrystatecity.in/v1/countries`,{headers:{'accept': 'application/json','X-CSCAPI-KEY': "MTNsSXpHOGNWZDh5dE1LaDRxczNhWjNUSHJWc2NMc2I5OUVnR3c4Ng=="}});
    return data.map((name) => [name.name,name.iso2]);
  } catch (error) {
    return error;
  }
};

export const fetchCountryCode = async (stateCode) => {
  console.log(stateCode);
  
  let changeableUrl = `https://cors-anywhere.herokuapp.com/https://api.countrystatecity.in/v1/states`;
  if(stateCode==="")
  {
    changeableUrl = `https://cors-anywhere.herokuapp.com/https://api.countrystatecity.in/v1/states`;
  }
  if(stateCode)
  {
    changeableUrl = `https://cors-anywhere.herokuapp.com/https://api.countrystatecity.in/v1/countries/${stateCode}/states`;
  }
  try {
    const { data } = await axios.get(changeableUrl,{headers:{'accept': 'application/json','X-CSCAPI-KEY': "MTNsSXpHOGNWZDh5dE1LaDRxczNhWjNUSHJWc2NMc2I5OUVnR3c4Ng=="}});
    return data.map((state) => [state.name,state.iso2]);
  } catch (error) {
    return error;
  }
};

export const fetchCounties = async (stateCode,countryCode) => {
  try {
    if(countryCode){
      if(stateCode)
      {
        const { data }  = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode}/cities`,{headers:{'accept': 'application/json','X-CSCAPI-KEY': "MTNsSXpHOGNWZDh5dE1LaDRxczNhWjNUSHJWc2NMc2I5OUVnR3c4Ng=="}});
        return data.map((name) => name.name);
      }
    }

    const { data }  = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.countrystatecity.in/v1/countries/US/states/CA/cities`,{headers:{'accept': 'application/json','X-CSCAPI-KEY': "MTNsSXpHOGNWZDh5dE1LaDRxczNhWjNUSHJWc2NMc2I5OUVnR3c4Ng=="}});
    return data.map((name) => name.name);
  } catch (error) {
    return error;
  }
};
