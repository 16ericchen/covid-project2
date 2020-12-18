import React, { useState, useEffect } from 'react';
import {  Doughnut, Bar, Line } from 'react-chartjs-2';
import styles from './USChart.module.css';
import axios from "axios";
const USChart = () => {
    const [chartData, setChartData] = useState({});
    const [chartData2, setChartData2] = useState({});
    const [chartData3, setChartData3] = useState({});
    const chart = () => {
      let statename = [];
      let caseNumber = [];
      axios
        .get(`https://disease.sh/v3/covid-19/states?sort=cases&yesterday=true&allowNull=true`)
        .then(res => {
          console.log(res);
          for (const dataObj of res.data) {
            statename.push(dataObj.state);
            caseNumber.push(dataObj.cases);
          }
          setChartData({
            labels: statename,
            datasets: [
              {
                label: "Number of Cases By States",
                data: caseNumber,
                backgroundColor: ["#ff0029", "#377eb8","#66a61e", "#984ea3", "#00d2d5", "#ff7f00", "#af8d00", "#7f80cd", "#b3e900", "#c42e60", "#a65628", "#f781bf", "#8dd3c7", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#fccde5", "#bc80bd", "#ffed6f", "#c4eaff", "#cf8c00", "#1b9e77", "#d95f02", "#e7298a", "#e6ab02", "#a6761d", "#0097ff", "#00d067", "#000000", "#252525", "#525252", "#737373", "#969696", "#bdbdbd", "#f43600", "#4ba93b", "#5779bb", "#927acc", "#97ee3f", "#bf3947", "#9f5b00", "#f48758", "#8caed6", "#f2b94f", "#eff26e", "#e43872", "#d9b100", "#9d7a00", "#698cff", "#d9d9d9", "#00d27e", "#d06800", "#009f82", "#c49200", "#cbe8ff", "#fecddf", "#c27eb6", "#8cd2ce", "#c4b8d9", "#f883b0", "#a49100", "#f48800"],
                borderWidth: 4
              }
            ]
          });
        })
        .catch(err => {
          console.log(err);
        });
      console.log(statename, caseNumber);
    };
    const chart2 = () => {
      let statename = [];
      let caseNumber = [];
      let deathNumber = [];
      let testNumber = [];
      let recoveredNumber =[];
      axios
        .get(`https://disease.sh/v3/covid-19/states?sort=cases&yesterday=true&allowNull=true`)
        .then(res => {
          console.log(res);
          for (const dataObj of res.data) {
            statename.push(dataObj.state);
            caseNumber.push(dataObj.cases);
            deathNumber.push(dataObj.deaths);
            testNumber.push(dataObj.tests);
            recoveredNumber.push(dataObj.recovered);
          }
          setChartData2({
            labels: statename,
            datasets: [
              {
                label: "Number of Cases By States",
                data: caseNumber,
                backgroundColor: ["#ff0029", "#377eb8","#66a61e", "#984ea3", "#00d2d5", "#ff7f00", "#af8d00", "#7f80cd", "#b3e900", "#c42e60", "#a65628", "#f781bf", "#8dd3c7", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#fccde5", "#bc80bd", "#ffed6f", "#c4eaff", "#cf8c00", "#1b9e77", "#d95f02", "#e7298a", "#e6ab02", "#a6761d", "#0097ff", "#00d067", "#000000", "#252525", "#525252", "#737373", "#969696", "#bdbdbd", "#f43600", "#4ba93b", "#5779bb", "#927acc", "#97ee3f", "#bf3947", "#9f5b00", "#f48758", "#8caed6", "#f2b94f", "#eff26e", "#e43872", "#d9b100", "#9d7a00", "#698cff", "#d9d9d9", "#00d27e", "#d06800", "#009f82", "#c49200", "#cbe8ff", "#fecddf", "#c27eb6", "#8cd2ce", "#c4b8d9", "#f883b0", "#a49100", "#f48800"],
                borderWidth: 4
              },
              {
                label: "Number of Deaths By States",
                data: deathNumber,
                backgroundColor: ["#ff0029", "#377eb8","#66a61e", "#984ea3", "#00d2d5", "#ff7f00", "#af8d00", "#7f80cd", "#b3e900", "#c42e60", "#a65628", "#f781bf", "#8dd3c7", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#fccde5", "#bc80bd", "#ffed6f", "#c4eaff", "#cf8c00", "#1b9e77", "#d95f02", "#e7298a", "#e6ab02", "#a6761d", "#0097ff", "#00d067", "#000000", "#252525", "#525252", "#737373", "#969696", "#bdbdbd", "#f43600", "#4ba93b", "#5779bb", "#927acc", "#97ee3f", "#bf3947", "#9f5b00", "#f48758", "#8caed6", "#f2b94f", "#eff26e", "#e43872", "#d9b100", "#9d7a00", "#698cff", "#d9d9d9", "#00d27e", "#d06800", "#009f82", "#c49200", "#cbe8ff", "#fecddf", "#c27eb6", "#8cd2ce", "#c4b8d9", "#f883b0", "#a49100", "#f48800"],
                borderWidth: 4
              },
              {
                label: "Number of Recovered By States",
                data: recoveredNumber,
                backgroundColor: ["#ff0029", "#377eb8","#66a61e", "#984ea3", "#00d2d5", "#ff7f00", "#af8d00", "#7f80cd", "#b3e900", "#c42e60", "#a65628", "#f781bf", "#8dd3c7", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#fccde5", "#bc80bd", "#ffed6f", "#c4eaff", "#cf8c00", "#1b9e77", "#d95f02", "#e7298a", "#e6ab02", "#a6761d", "#0097ff", "#00d067", "#000000", "#252525", "#525252", "#737373", "#969696", "#bdbdbd", "#f43600", "#4ba93b", "#5779bb", "#927acc", "#97ee3f", "#bf3947", "#9f5b00", "#f48758", "#8caed6", "#f2b94f", "#eff26e", "#e43872", "#d9b100", "#9d7a00", "#698cff", "#d9d9d9", "#00d27e", "#d06800", "#009f82", "#c49200", "#cbe8ff", "#fecddf", "#c27eb6", "#8cd2ce", "#c4b8d9", "#f883b0", "#a49100", "#f48800"],
                borderWidth: 4
              },
              {
                label: "Number of Tests By States",
                data: testNumber,
                backgroundColor: ["#ff0029", "#377eb8","#66a61e", "#984ea3", "#00d2d5", "#ff7f00", "#af8d00", "#7f80cd", "#b3e900", "#c42e60", "#a65628", "#f781bf", "#8dd3c7", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#fccde5", "#bc80bd", "#ffed6f", "#c4eaff", "#cf8c00", "#1b9e77", "#d95f02", "#e7298a", "#e6ab02", "#a6761d", "#0097ff", "#00d067", "#000000", "#252525", "#525252", "#737373", "#969696", "#bdbdbd", "#f43600", "#4ba93b", "#5779bb", "#927acc", "#97ee3f", "#bf3947", "#9f5b00", "#f48758", "#8caed6", "#f2b94f", "#eff26e", "#e43872", "#d9b100", "#9d7a00", "#698cff", "#d9d9d9", "#00d27e", "#d06800", "#009f82", "#c49200", "#cbe8ff", "#fecddf", "#c27eb6", "#8cd2ce", "#c4b8d9", "#f883b0", "#a49100", "#f48800"],
                borderWidth: 4
              },
            ]
          });
        })
        .catch(err => {
          console.log(err);
        });
      console.log(statename, caseNumber);
    };
    const chart3 = () => {
      let statename = [];
      let caseNumber = [];
      let testNumber = [];
      let deathsNumber = [];
      axios
        .get(`https://disease.sh/v3/covid-19/states?sort=cases&yesterday=true&allowNull=true`)
        .then(res => {
          console.log(res);
          for (const dataObj of res.data) {
            statename.push(dataObj.state);
            caseNumber.push(dataObj.casesPerOneMillion);
            deathsNumber.push(dataObj.deathsPerOneMillion);
            testNumber.push(dataObj.testsPerOneMillion);
          }
          setChartData3({
            labels: statename,
            datasets: [
              {
                label: "Number of Cases Per One Million By States",
                data: caseNumber,
                backgroundColor: ["#ff0029", "#377eb8","#66a61e", "#984ea3", "#00d2d5", "#ff7f00", "#af8d00", "#7f80cd", "#b3e900", "#c42e60", "#a65628", "#f781bf", "#8dd3c7", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#fccde5", "#bc80bd", "#ffed6f", "#c4eaff", "#cf8c00", "#1b9e77", "#d95f02", "#e7298a", "#e6ab02", "#a6761d", "#0097ff", "#00d067", "#000000", "#252525", "#525252", "#737373", "#969696", "#bdbdbd", "#f43600", "#4ba93b", "#5779bb", "#927acc", "#97ee3f", "#bf3947", "#9f5b00", "#f48758", "#8caed6", "#f2b94f", "#eff26e", "#e43872", "#d9b100", "#9d7a00", "#698cff", "#d9d9d9", "#00d27e", "#d06800", "#009f82", "#c49200", "#cbe8ff", "#fecddf", "#c27eb6", "#8cd2ce", "#c4b8d9", "#f883b0", "#a49100", "#f48800"],
                borderColor: ["#ff0029", "#377eb8","#66a61e", "#984ea3", "#00d2d5", "#ff7f00", "#af8d00", "#7f80cd", "#b3e900", "#c42e60", "#a65628", "#f781bf", "#8dd3c7", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#fccde5", "#bc80bd", "#ffed6f", "#c4eaff", "#cf8c00", "#1b9e77", "#d95f02", "#e7298a", "#e6ab02", "#a6761d", "#0097ff", "#00d067", "#000000", "#252525", "#525252", "#737373", "#969696", "#bdbdbd", "#f43600", "#4ba93b", "#5779bb", "#927acc", "#97ee3f", "#bf3947", "#9f5b00", "#f48758", "#8caed6", "#f2b94f", "#eff26e", "#e43872", "#d9b100", "#9d7a00", "#698cff", "#d9d9d9", "#00d27e", "#d06800", "#009f82", "#c49200", "#cbe8ff", "#fecddf", "#c27eb6", "#8cd2ce", "#c4b8d9", "#f883b0", "#a49100", "#f48800"],

                borderWidth: 4,
                fill: true,
              },
              {
                label: "Number of Deaths Per One Million By States",
                data : deathsNumber,
                backgroundColor: ["#ff0029", "#377eb8","#66a61e", "#984ea3", "#00d2d5", "#ff7f00", "#af8d00", "#7f80cd", "#b3e900", "#c42e60", "#a65628", "#f781bf", "#8dd3c7", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#fccde5", "#bc80bd", "#ffed6f", "#c4eaff", "#cf8c00", "#1b9e77", "#d95f02", "#e7298a", "#e6ab02", "#a6761d", "#0097ff", "#00d067", "#000000", "#252525", "#525252", "#737373", "#969696", "#bdbdbd", "#f43600", "#4ba93b", "#5779bb", "#927acc", "#97ee3f", "#bf3947", "#9f5b00", "#f48758", "#8caed6", "#f2b94f", "#eff26e", "#e43872", "#d9b100", "#9d7a00", "#698cff", "#d9d9d9", "#00d27e", "#d06800", "#009f82", "#c49200", "#cbe8ff", "#fecddf", "#c27eb6", "#8cd2ce", "#c4b8d9", "#f883b0", "#a49100", "#f48800"],
                borderWidth: 4,
                borderColor: ["#ff0029", "#377eb8","#66a61e", "#984ea3", "#00d2d5", "#ff7f00", "#af8d00", "#7f80cd", "#b3e900", "#c42e60", "#a65628", "#f781bf", "#8dd3c7", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#fccde5", "#bc80bd", "#ffed6f", "#c4eaff", "#cf8c00", "#1b9e77", "#d95f02", "#e7298a", "#e6ab02", "#a6761d", "#0097ff", "#00d067", "#000000", "#252525", "#525252", "#737373", "#969696", "#bdbdbd", "#f43600", "#4ba93b", "#5779bb", "#927acc", "#97ee3f", "#bf3947", "#9f5b00", "#f48758", "#8caed6", "#f2b94f", "#eff26e", "#e43872", "#d9b100", "#9d7a00", "#698cff", "#d9d9d9", "#00d27e", "#d06800", "#009f82", "#c49200", "#cbe8ff", "#fecddf", "#c27eb6", "#8cd2ce", "#c4b8d9", "#f883b0", "#a49100", "#f48800"],

                fill: true,
              },
              {
                label: "Number of Tests Per One Million By States",
                data : testNumber,
                backgroundColor: ["#ff0029", "#377eb8","#66a61e", "#984ea3", "#00d2d5", "#ff7f00", "#af8d00", "#7f80cd", "#b3e900", "#c42e60", "#a65628", "#f781bf", "#8dd3c7", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#fccde5", "#bc80bd", "#ffed6f", "#c4eaff", "#cf8c00", "#1b9e77", "#d95f02", "#e7298a", "#e6ab02", "#a6761d", "#0097ff", "#00d067", "#000000", "#252525", "#525252", "#737373", "#969696", "#bdbdbd", "#f43600", "#4ba93b", "#5779bb", "#927acc", "#97ee3f", "#bf3947", "#9f5b00", "#f48758", "#8caed6", "#f2b94f", "#eff26e", "#e43872", "#d9b100", "#9d7a00", "#698cff", "#d9d9d9", "#00d27e", "#d06800", "#009f82", "#c49200", "#cbe8ff", "#fecddf", "#c27eb6", "#8cd2ce", "#c4b8d9", "#f883b0", "#a49100", "#f48800"],
                borderWidth: 4,
                borderColor: ["#ff0029", "#377eb8","#66a61e", "#984ea3", "#00d2d5", "#ff7f00", "#af8d00", "#7f80cd", "#b3e900", "#c42e60", "#a65628", "#f781bf", "#8dd3c7", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#fccde5", "#bc80bd", "#ffed6f", "#c4eaff", "#cf8c00", "#1b9e77", "#d95f02", "#e7298a", "#e6ab02", "#a6761d", "#0097ff", "#00d067", "#000000", "#252525", "#525252", "#737373", "#969696", "#bdbdbd", "#f43600", "#4ba93b", "#5779bb", "#927acc", "#97ee3f", "#bf3947", "#9f5b00", "#f48758", "#8caed6", "#f2b94f", "#eff26e", "#e43872", "#d9b100", "#9d7a00", "#698cff", "#d9d9d9", "#00d27e", "#d06800", "#009f82", "#c49200", "#cbe8ff", "#fecddf", "#c27eb6", "#8cd2ce", "#c4b8d9", "#f883b0", "#a49100", "#f48800"],

                fill: true,
              },
            ]
          });
        })
        .catch(err => {
          console.log(err);
        });
      console.log(statename, caseNumber);
    };
    useEffect(() => {
      chart();
      chart2();
      chart3();
    }, []); 

    return (
      <div className={styles.container}>
        <Doughnut data={chartData}/>
        <h1>US Data For Each State</h1>
        <Bar data={chartData2}/>
        <h1>Data Per One Million</h1>
        <Line data={chartData3}/>
      </div>
    );
  };
export default USChart;



