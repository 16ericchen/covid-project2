import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData(country);
      setDailyData(initialDailyData);
      console.log(initialDailyData);
    };

    fetchMyAPI();
  }, [country]);

  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths','Predicted Infected','Predicted Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)','rgba(0, 150, 100, 0.5)','rgba(200, 0, 255, 0.5)'],
              data: [confirmed.value, recovered.value, deaths.value,(confirmed.value*10),deaths.value*1000],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );

  const lineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
          datasets: [
            {
            data: dailyData.map(({Confirmed}) => Confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, 
          {
            data: dailyData.map(({Deaths}) => Deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },  
          {
            data: dailyData.map(({Recovered}) => Recovered),
            label: 'Recovered',
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            fill: true,
          },
            {
            data: dailyData.map(({Confirmed}) => (Confirmed*10)),
            label: 'Predicted Infected',
            borderColor: 'black',
            backgroundColor:'rgba(100,150, 200, 0.5)',
            fill: true,
          },
          {
            data: dailyData.map(({Deaths}) => (Deaths*1000)),
            label: 'Predicted Deaths',
            borderColor: 'black',
            backgroundColor: 'rgba(150, 100,40, 0.5)',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );
  
  return (
    <div className={styles.container}>
      {lineChart}
      {barChart}
    </div>
  );
};

export default Chart;
