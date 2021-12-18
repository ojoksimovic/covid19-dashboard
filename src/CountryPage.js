import "./index.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Chart from "chart.js";
import { Pie } from "react-chartjs-2";
import "./utils";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Tabs, Tab } from "@material-ui/core";
import axios from "axios";
import CountryVaccinePie from "./CountryVaccinePie";
import Footer from "./Footer";

const useStyles = makeStyles({
  root: {
    // maxWidth: 800,
    marginBottom: "10px",
  },
  media: {
    height: 0,
  },
});

let colourThemeArray =[
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(54, 162, 235)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)",
  "#4dc9f6",
  "#f67019",
  "#f53794",
  "#537bc4",
  "#acc236",
  "#166a8f",
  "#00a950",
  "#58595b",
  "#8549ba",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(54, 162, 235)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)",
  "#4dc9f6",
  "#f67019",
  "#f53794",
  "#537bc4",
  "#acc236",
  "#166a8f",
  "#00a950",
  "#58595b",
  "#8549ba",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(54, 162, 235)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)",
  "#4dc9f6",
  "#f67019",
  "#f53794",
  "#537bc4",
  "#acc236",
  "#166a8f",
  "#00a950",
  "#58595b",
  "#8549ba",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(54, 162, 235)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)",
  "#4dc9f6",
  "#f67019",
  "#f53794",
  "#537bc4",
  "#acc236",
  "#166a8f",
  "#00a950",
  "#58595b",
  "#8549ba",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(54, 162, 235)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)",
  "#4dc9f6",
  "#f67019",
  "#f53794",
  "#537bc4",
  "#acc236",
  "#166a8f",
  "#00a950",
  "#58595b",
  "#8549ba",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(54, 162, 235)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)",
  "#4dc9f6",
  "#f67019",
  "#f53794",
  "#537bc4",
  "#acc236",
  "#166a8f",
  "#00a950",
  "#58595b",
  "#8549ba",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(54, 162, 235)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)",
  "#4dc9f6",
  "#f67019",
  "#f53794",
  "#537bc4",
  "#acc236",
  "#166a8f",
  "#00a950",
  "#58595b",
  "#8549ba",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(54, 162, 235)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)",
  "#4dc9f6",
  "#f67019",
  "#f53794",
  "#537bc4",
  "#acc236",
  "#166a8f",
  "#00a950",
  "#58595b",
  "#8549ba",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(54, 162, 235)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)",
  "#4dc9f6",
  "#f67019",
  "#f53794",
  "#537bc4",
  "#acc236",
  "#166a8f",
  "#00a950",
  "#58595b",
  "#8549ba",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(54, 162, 235)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)",
  "#4dc9f6",
  "#f67019",
  "#f53794",
  "#537bc4",
  "#acc236",
  "#166a8f",
  "#00a950",
  "#58595b",
  "#8549ba",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(54, 162, 235)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)",
  "#4dc9f6",
  "#f67019",
  "#f53794",
  "#537bc4",
  "#acc236",
  "#166a8f",
  "#00a950",
  "#58595b",
  "#8549ba",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(54, 162, 235)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)",
  "#4dc9f6",
  "#f67019",
  "#f53794",
  "#537bc4",
  "#acc236",
  "#166a8f",
  "#00a950",
  "#58595b",
  "#8549ba",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(54, 162, 235)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)",
  "#4dc9f6",
  "#f67019",
  "#f53794",
  "#537bc4",
  "#acc236",
  "#166a8f",
  "#00a950",
  "#58595b",
  "#8549ba",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(54, 162, 235)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)",
  "#4dc9f6",
  "#f67019",
  "#f53794",
  "#537bc4",
  "#acc236",
  "#166a8f",
  "#00a950",
  "#58595b",
  "#8549ba",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(54, 162, 235)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)",
  "#4dc9f6",
  "#f67019",
  "#f53794",
  "#537bc4",
  "#acc236",
  "#166a8f",
  "#00a950",
  "#58595b",
  "#8549ba",
];

let provinceCasesData = [];
let provinceDeathsData = [];
let date = [];
let data1;
let data1Daily = []

// import colourThemeArray from "./ColourTheme"

class CountryPage extends React.Component {
  constructor(props) {
    super(props);

    this.fetchCountryData = this.fetchCountryData.bind(this);
    this.countryHistoricalChart = this.countryHistoricalChart.bind(this);
    this.countryVaccineChart = this.countryVaccineChart.bind(this);
    this.countryVaccineChartData = this.countryVaccineChartData.bind(this);
    this.countryHistoricalLogChart = this.countryHistoricalLogChart.bind(this);
    this.provinceData = this.provinceData.bind(this);
    this.ProvinceCards = this.ProvinceCards.bind(this);
    this.ProvinceHeader = this.ProvinceHeader.bind(this);
    this.countryHistoricalDailyDeathChart = this.countryHistoricalDailyDeathChart.bind(this);
    this.countryHistoricalDailyChart = this.countryHistoricalDailyChart.bind(this);
    this.countryVaccineChartDaily = this.countryVaccineChartDaily.bind(this);

    this.state = {
      XVaccineStats: null,
      XHistoryStats: null,
      VaccineInfo: null,
      tabValue: 0,
      totalTabValue:0,
      tabProvinceValue: 0,
      tabProvinceDeathValue: 0,
    };
  }

  componentDidMount() {
    this.fetchCountryData();
  }

  fetchCountryData() {
    let countryURL =
      "https://disease.sh/v3/covid-19/historical/" +
      this.props.XCountry +
      "?lastdays=all";
    axios.all([axios.get(countryURL)]).then(
      axios.spread((req1) => {
        this.setState({
          XHistoryStats: req1.data,
        });

        this.countryHistoricalChart();
        this.countryHistoricalDailyChart();
        this.countryHistoricalDailyDeathChart();
        this.countryHistoricalLogChart();
        this.countryVaccineChartData();
        this.provinceData();
      })
    );
  }

  countryVaccineChartData(){
    for (let i = 0; i < this.props.XVaccineCountries.length; i++) {
      if (this.props.XVaccineCountries[i]["country"] == this.props.XCountry){
        date = Object.keys(this.props.XVaccineCountries[i]["timeline"]);
        data1 = Object.values(this.props.XVaccineCountries[i]["timeline"]);
        for (let j = 0; j < date.length; j++){
          data1Daily.push(this.props.XVaccineCountries[i]["timeline"][date[j]]- this.props.XVaccineCountries[i]["timeline"][date[j-1]])
        }

        this.setState({
          VaccineInfo: "Available"
        });
      }
      
            }
            this.countryVaccineChart();
            this.countryVaccineChartDaily();
            
  }

  countryVaccineChart() {
    if (this.state.VaccineInfo != null){ 
    var config = {
      type: "line",
      data: {
        labels: date,
        datasets: [
          {
            label: "Vaccines Administered",
            backgroundColor: "#00A6B4",
            borderColor: "#00A6B4",
            data: data1,
            fill: false,
          },
        ],
      },
      options: {
        aspectRatio: 1.5,
        legend: {
          labels: {
            usePointStyle: true,
          },
          display: false,
          position: "bottom",
        },
        responsive: true,
        title: {
          display: true,
          text: "Vaccines Administered",
          fontSize: 20,
        },
        tooltips: {
          mode: "index",
          intersect: false,
          callbacks: {
            label: function (tooltipItem, data) {
              var dataLabel = data.labels[tooltipItem.index];
              var value =
                ": " +
                data.datasets[tooltipItem.datasetIndex].data[
                  tooltipItem.index
                ].toLocaleString();

              if (Chart.helpers.isArray(dataLabel)) {
                dataLabel = dataLabel.slice();
                dataLabel[0] += value;
              } else {
                dataLabel += value;
              }
              return dataLabel;
            },
          },
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                drawBorder: true,
                drawOnChartArea: false,
              },
              display: true,
              type: "time",
              time: {
                unit: "day",
              },
              scaleLabel: {
                display: true,
                labelString: "Time",
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                userCallback: function (value, index, values) {
                  value = value.toString();
                  value = value.split(/(?=(?:...)*$)/);
                  value = value.join(",");
                  return value;
                },
              },
              gridLines: {
                display: true,
                drawBorder: true,
                drawOnChartArea: false,
              },
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Vaccines Administered",
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("canvasVaccine").getContext("2d");
    window.myLine = new Chart(ctx, config);

    var colorNames = Object.keys(window.chartColors);
    }
  }
  countryVaccineChartDaily() {


    if (this.state.VaccineInfo != null){ 
var config ={
    type: 'bar',
      data: {
        labels: date,
        datasets: [
          {
            label: "Vaccinations",
            backgroundColor: "rgb(54, 162, 235)",
            borderColor: "rgb(54, 162, 235)",
            data: data1Daily,
          },
        ],
      },
    options: {
      aspectRatio: 1.5,
      responsive: true,
        legend: {
          display: false,
          position: "bottom",
        },
        responsive: true,
        title: {
          display: true,
          text: "Daily Vaccinations",
          fontSize: 20,
        },
      scales: {
            xAxes: [
            {
              gridLines: {
                display: true,
                drawBorder: true,
                drawOnChartArea: false,
              },
              display: true,
              scaleLabel: {
                display: true,
              },
            },
          ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    min: 0,
                    userCallback: function (value, index, values) {
                      value = value.toString();
                      value = value.split(/(?=(?:...)*$)/);
                      value = value.join(",");
                      return value;
                    },
                  },
                  gridLines: {
                    display: true,
                    drawBorder: true,
                    drawOnChartArea: false,
                  },
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: "Cases",
                  },
                },
              ],}
    }}}

    var ctx = document.getElementById("canvasVaccineDaily").getContext("2d");
    window.myLine = new Chart(ctx, config);

    var colorNames = Object.keys(window.chartColors);
  }

  capitalizeFirstLetter(mySentence) {
    const words = mySentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    let newName = words.join(" ");
    return newName;
  }

  ProvinceCards() {
    let provinceCardData = [];
    let provinceCases;
    let provinceDeaths;
    let provinceRecovered;

    for (let i = 0; i < this.props.XProvinceHistory.length; i++) {
      provinceCases = Object.values(
        this.props.XProvinceHistory[i].timeline.cases
      );
      provinceDeaths = Object.values(
        this.props.XProvinceHistory[i].timeline.deaths
      );
      provinceRecovered = Object.values(
        this.props.XProvinceHistory[i].timeline.recovered
      );
      provinceCardData.push(
        <div className="col-6 col-md-4 col-lg-3">
          <Card style={{ marginBottom: 10, borderTop: colourThemeArray[i] + " 5px solid" }}>
            <CardContent>
              <Typography gutterBottom variant="h6">
                {this.capitalizeFirstLetter(
                  this.props.XProvinceHistory[i].province
                )}
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                style={{ marginBottom: 0 }}
              >
                {provinceCases[provinceCases.length - 1].toLocaleString()} cases
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                color="secondary"
                style={{ marginBottom: 0 }}
              >
                {provinceDeaths[provinceDeaths.length - 1].toLocaleString()}{" "}
                deaths
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                style={{ color: "green" }}
              >
                {this.props.XCountry == "Canada"
                  ? null
                  : provinceRecovered[
                      provinceRecovered.length - 1
                    ].toLocaleString() + " recovered"}
              </Typography>

              <Typography
                variant="body1"
                component="p"
                color="textSecondary"
                style={{ marginBottom: 0, fontSize: "0.8rem" }}
              >
                {(
                  provinceCases[provinceCases.length - 1] /
                  this.props.XStats.cases
                ).toLocaleString(undefined, {
                  style: "percent",
                  minimumFractionDigits: 2,
                })}{" "}
                of total country cases
              </Typography>

              <Typography
                variant="body1"
                component="p"
                color="secondary"
                style={{ marginBottom: 0, fontSize: "0.8rem" }}
              >
                {(
                  provinceDeaths[provinceDeaths.length - 1] /
                  this.props.XStats.deaths
                ).toLocaleString(undefined, {
                  style: "percent",
                  minimumFractionDigits: 2,
                })}{" "}
                of total country deaths
              </Typography>

              {/* <Typography variant="body1" component="p" color = "textSecondary" style={{marginTop: 0, fontSize: "0.8rem"}}>
            {(fatalityRateCountry[i].toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}))} fatality rate
          </Typography> */}
            </CardContent>
          </Card>
        </div>
      );
    }
    return (
      <div className="container-fluid">
        <div className="row">
          {provinceCardData}
          </div>
        <hr />
      </div>
    );
  }

  ProvinceHeader() {
    return (
      <div className="container-fluid text-center">
        <hr />
        <h1 class="display-4" id="province-text">
          Provincial
        </h1>
        <hr />
      </div>
    );
  }

  provinceChart(data, title, canvasid, yaxis) {
    var config = {
      type: "line",
      data: {
        labels: date,
        datasets: data,
      },
      options: {
        aspectRatio: 1.3,
        legend: {
          labels: {
            usePointStyle: true,
          },
          display: true,
          position: "bottom",
        },
        responsive: true,
        title: {
          display: true,
          text: title,
          fontSize: 20,
        },
        tooltips: {
          mode: "index",
          intersect: false,
          callbacks: {
            label: function (tooltipItem, data) {
              var dataLabel = data.labels[tooltipItem.index];
              var value =
                ": " +
                data.datasets[tooltipItem.datasetIndex].data[
                  tooltipItem.index
                ].toLocaleString();

              if (Chart.helpers.isArray(dataLabel)) {
                dataLabel = dataLabel.slice();
                dataLabel[0] += value;
              } else {
                dataLabel += value;
              }
              return dataLabel;
            },
          },
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                drawBorder: true,
                drawOnChartArea: false,
              },
              display: true,
              type: "time",
              time: {
                unit: "day",
              },
              scaleLabel: {
                display: true,
                labelString: "Time",
              },
            },
          ],
          yAxes: [
            {
              type: yaxis,
              ticks: {
                beginAtZero: true,
                userCallback: function (value, index, values) {
                  value = value.toString();
                  value = value.split(/(?=(?:...)*$)/);
                  value = value.join(",");
                  return value;
                },
              },
              gridLines: {
                display: true,
                drawBorder: true,
                drawOnChartArea: false,
              },
              display: true,
              scaleLabel: {
                display: true,
                labelString: title,
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById(canvasid).getContext("2d");
    window.myLine = new Chart(ctx, config);

    var colorNames = Object.keys(window.chartColors);
  }

  provinceData() {
    if (this.props.XProvinceHistory.length > 1) {
      date = Object.keys(this.props.XProvinceHistory[0].timeline.cases);
      for (let i = 0; i < this.props.XProvinceHistory.length; i++) {
        provinceCasesData.push({
          label: this.capitalizeFirstLetter(
            this.props.XProvinceHistory[i].province
          ),
          backgroundColor: colourThemeArray[i],
          borderColor: colourThemeArray[i],
          data: Object.values(this.props.XProvinceHistory[i].timeline.cases),
          fill: false,
        });
        provinceDeathsData.push({
          label: this.capitalizeFirstLetter(
            this.props.XProvinceHistory[i].province
          ),
          backgroundColor: colourThemeArray[i],
          borderColor: colourThemeArray[i],
          data: Object.values(this.props.XProvinceHistory[i].timeline.deaths),
          fill: false,
        });
      }
      this.provinceChart(
        provinceCasesData,
        "Cases",
        "canvasProvinceCases",
        "linear"
      );
      this.provinceChart(
        provinceCasesData,
        "Cases (Log)",
        "canvasProvinceCasesLog",
        "logarithmic"
      );
      this.provinceChart(
        provinceDeathsData,
        "Deaths",
        "canvasProvinceDeaths",
        "linear"
      );
      this.provinceChart(
        provinceDeathsData,
        "Deaths (Log)",
        "canvasProvinceDeathsLog",
        "logarithmic"
      );
    }
  }

  countryHistoricalChart() {
    var date = Object.keys(this.state.XHistoryStats.timeline.cases);
    var data1 = Object.values(this.state.XHistoryStats.timeline.cases);
    var data2 = Object.values(this.state.XHistoryStats.timeline.deaths);
    var data3 = Object.values(this.state.XHistoryStats.timeline.recovered);
    var config = {
      type: "line",
      data: {
        labels: date,
        datasets: [
          {
            label: "Cases",
            backgroundColor: "rgb(54, 162, 235)",
            borderColor: "rgb(54, 162, 235)",
            data: data1,
            fill: false,
          },
          {
            label: "Deaths",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: data2,
            fill: false,
          },
          {
            label: "Recovered",
            backgroundColor: "rgb(75, 192, 192)",
            borderColor: "rgb(75, 192, 192)",
            data: data3,
            fill: false,
          },
        ],
      },
      options: {
        aspectRatio: 1.5,
        legend: {
          labels: {
            usePointStyle: true,
          },
          display: true,
          position: "bottom",
        },
        responsive: true,
        title: {
          display: true,
          text: "Cases",
          fontSize: 20,
        },
        tooltips: {
          mode: "index",
          intersect: false,
          callbacks: {
            label: function (tooltipItem, data) {
              var dataLabel = data.labels[tooltipItem.index];
              var value =
                ": " +
                data.datasets[tooltipItem.datasetIndex].data[
                  tooltipItem.index
                ].toLocaleString();

              if (Chart.helpers.isArray(dataLabel)) {
                dataLabel = dataLabel.slice();
                dataLabel[0] += value;
              } else {
                dataLabel += value;
              }
              return dataLabel;
            },
          },
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                drawBorder: true,
                drawOnChartArea: false,
              },
              display: true,
              type: "time",
              time: {
                unit: "day",
              },
              scaleLabel: {
                display: true,
                labelString: "Time",
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                userCallback: function (value, index, values) {
                  value = value.toString();
                  value = value.split(/(?=(?:...)*$)/);
                  value = value.join(",");
                  return value;
                },
              },
              gridLines: {
                display: true,
                drawBorder: true,
                drawOnChartArea: false,
              },
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Cases",
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("canvasCountry").getContext("2d");
    window.myLine = new Chart(ctx, config);

    var colorNames = Object.keys(window.chartColors);
  }

  countryHistoricalDailyChart() {

    var date = Object.keys(this.state.XHistoryStats.timeline.cases);
    var data1 = []
    for (let i = 0; i < date.length; i++){
      data1.push(this.state.XHistoryStats.timeline.cases[date[i]]- this.state.XHistoryStats.timeline.cases[date[i-1]])
    }
    
var config ={
    type: 'bar',
      data: {
        labels: date,
        datasets: [
          {
            label: "Cases",
            backgroundColor: "rgb(54, 162, 235)",
            borderColor: "rgb(54, 162, 235)",
            data: data1,
          },
        ],
      },
    options: {
      aspectRatio: 1.5,
      responsive: true,
        legend: {
          display: false,
          position: "bottom",
        },
        responsive: true,
        title: {
          display: true,
          text: "Daily Cases",
          fontSize: 20,
        },
      scales: {
            xAxes: [
            {
              gridLines: {
                display: true,
                drawBorder: true,
                drawOnChartArea: false,
              },
              display: true,
              scaleLabel: {
                display: true,
              },
            },
          ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    min: 0,
                    userCallback: function (value, index, values) {
                      value = value.toString();
                      value = value.split(/(?=(?:...)*$)/);
                      value = value.join(",");
                      return value;
                    },
                  },
                  gridLines: {
                    display: true,
                    drawBorder: true,
                    drawOnChartArea: false,
                  },
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: "Cases",
                  },
                },
              ],}
    }}

    var ctx = document.getElementById("canvasCountryDaily").getContext("2d");
    window.myLine = new Chart(ctx, config);

    var colorNames = Object.keys(window.chartColors);
  }

  countryHistoricalDailyDeathChart() {

    var date = Object.keys(this.state.XHistoryStats.timeline.cases);
    var data1 = []
    for (let i = 0; i < date.length; i++){
      data1.push(this.state.XHistoryStats.timeline.deaths[date[i]]- this.state.XHistoryStats.timeline.deaths[date[i-1]])
    }

var config ={
    type: 'bar',
      data: {
        labels: date,
        datasets: [
          {
            label: "Deaths",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: data1,
          },
        ],
      },
    options: {
      aspectRatio: 1.5,
      responsive: true,
        legend: {
          display: false,
        },
        responsive: true,
        title: {
          display: true,
          text: "Daily Deaths",
          fontSize: 20,
        },
      scales: {
            xAxes: [
            {
              gridLines: {
                display: true,
                drawBorder: true,
                drawOnChartArea: false,
              },
              display: true,
              scaleLabel: {
                display: false,
              },
            },
          ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    min: 0,
                    userCallback: function (value, index, values) {
                      value = value.toString();
                      value = value.split(/(?=(?:...)*$)/);
                      value = value.join(",");
                      return value;
                    },
                  },
                  gridLines: {
                    display: true,
                    drawBorder: true,
                    drawOnChartArea: false,
                  },
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: "Cases",
                  },
                },
              ],}
    }}

    var ctx = document.getElementById("canvasCountryDailyDeath").getContext("2d");
    window.myLine = new Chart(ctx, config);

    var colorNames = Object.keys(window.chartColors);
  }


  countryHistoricalLogChart() {
    var date = Object.keys(this.state.XHistoryStats.timeline.cases);
    var data1 = Object.values(this.state.XHistoryStats.timeline.cases);
    var data2 = Object.values(this.state.XHistoryStats.timeline.deaths);
    var data3 = Object.values(this.state.XHistoryStats.timeline.recovered);
    var config = {
      type: "line",
      data: {
        labels: date,
        datasets: [
          {
            label: "Global",
            backgroundColor: "rgb(54, 162, 235)",
            borderColor: "rgb(54, 162, 235)",
            data: data1,
            fill: false,
          },
          {
            label: "Deaths",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: data2,
            fill: false,
          },
          {
            label: "Recovered",
            backgroundColor: "rgb(75, 192, 192)",
            borderColor: "rgb(75, 192, 192)",
            data: data3,
            fill: false,
          },
        ],
      },
      options: {
        aspectRatio: 1.5,
        legend: {
          labels: {
            usePointStyle: true,
          },
          display: true,
          position: "bottom",
        },
        responsive: true,
        title: {
          display: true,
          text: "Cases (Log)",
          fontSize: 20,
        },
        tooltips: {
          mode: "index",
          intersect: false,
          callbacks: {
            label: function (tooltipItem, data) {
              var dataLabel = data.labels[tooltipItem.index];
              var value =
                ": " +
                data.datasets[tooltipItem.datasetIndex].data[
                  tooltipItem.index
                ].toLocaleString();

              if (Chart.helpers.isArray(dataLabel)) {
                dataLabel = dataLabel.slice();
                dataLabel[0] += value;
              } else {
                dataLabel += value;
              }
              return dataLabel;
            },
          },
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                drawBorder: true,
                drawOnChartArea: false,
              },
              display: true,
              type: "time",
              time: {
                unit: "day",
              },
              scaleLabel: {
                display: true,
                labelString: "Time",
              },
            },
          ],
          yAxes: [
            {
              type: "logarithmic",
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: true,
                drawBorder: true,
                drawOnChartArea: false,
              },
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Cases",
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("canvasCountryLog").getContext("2d");
    window.myLine = new Chart(ctx, config);

    var colorNames = Object.keys(window.chartColors);
  }

  handleTotalChange = (event, newValue) => {
    this.setState({
      totalTabValue: newValue,
    });
  }

  handleChange = (event, newValue) => {
    this.setState({
      tabValue: newValue,
    });
  }

  handleProvinceCasesChange = (event, newValue) => {
    this.setState({
      tabProvinceValue: newValue,
    });
  }

  handleProvinceDeathsChange = (event, newValue) => {
    this.setState({
      tabProvinceDeathValue: newValue,
    });
  }



  
  render() {
    return (
      <div className="container-fluid  text-center">
        <div className="text-center">
          <h1 class="display-4" id="title-text">
            {this.props.XCountry}
          </h1>
          <hr />
          <p id="population-text">
            Population:{" "}
            {this.props.XStats.population
              ? this.props.XStats.population.toLocaleString()
              : "unconfirmed"}
          </p>
          <hr />

          <div className="row">
            <div className="col-xs-8 offset-xs-2 col-sm-6 col-lg-3">
              <Card
                // className={classes.root}
                style={{ marginBottom: 10, borderTop: "rgb(54, 162, 235) 5px solid" }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    Total Confirmed Cases
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ display: "inline" }}
                  >
                    {this.props.XStats.cases.toLocaleString()}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    style={{ color: "red", display: "inline", marginLeft: 10 }}
                  >
                    {this.props.XStats.todayCases ? "+" : null}
                    {this.props.XStats.todayCases
                      ? this.props.XStats.todayCases.toLocaleString()
                      : null}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5 }}
                  >
                    {this.props.XStats.population
                      ? (
                          this.props.XStats.cases / this.props.XStats.population
                        ).toLocaleString(undefined, {
                          style: "percent",
                          minimumFractionDigits: 2,
                        }) + " of Population"
                      : null}
                  </Typography>
                </CardContent>
              </Card>
            </div>

            <div className="col-xs-8 offset-xs-2 col-sm-6 col-lg-3">
              <Card
                // className={classes.root}
                style={{ marginBottom: 10, borderTop: "rgb(255, 205, 86) 5px solid" }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    Total Active Cases
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ display: "inline" }}
                  >
                    {this.props.XStats.active.toLocaleString()}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    style={{
                      color:
                        this.props.XStats.todayCases -
                          this.props.XStats.todayRecovered <
                        0
                          ? "green"
                          : "red",
                      display: "inline",
                      marginLeft: 10,
                    }}
                  >
                    {this.props.XStats.todayCases -
                      this.props.XStats.todayRecovered >
                    0
                      ? "+" +
                        (
                          this.props.XStats.todayCases -
                          this.props.XStats.todayRecovered
                        ).toLocaleString()
                      : ""}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5 }}
                  >
                    {this.props.XStats.critical
                      ? this.props.XStats.critical.toLocaleString()
                      : null}{" "}
                    Remain in Critical Condition
                  </Typography>
                </CardContent>
              </Card>
            </div>

            <div className="col-xs-8 offset-xs-2 col-sm-6 col-lg-3">
              <Card
                // className={classes.root}
                style={{ marginBottom: 10, borderTop: "rgb(75, 192, 192) 5px solid" }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    Total Recovered
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ display: "inline" }}
                  >
                    {this.props.XStats.recovered.toLocaleString()}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                    style={{
                      color: "green",
                      display: "inline",
                      marginLeft: 10,
                    }}
                  >
                    {this.props.XStats.todayRecovered ? "+" : null}
                    {this.props.XStats.todayRecovered
                      ? this.props.XStats.todayRecovered.toLocaleString()
                      : null}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5 }}
                  >
                    {(
                      this.props.XStats.recovered / this.props.XStats.cases
                    ).toLocaleString(undefined, {
                      style: "percent",
                      minimumFractionDigits: 2,
                    })}{" "}
                    of Confirmed Cases
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="col-xs-8 offset-xs-2 col-sm-6 col-lg-3">
              <Card
                // className={classes.root}
                style={{ marginBottom: 10, borderTop: "rgb(255, 99, 132) 5px solid" }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    Total Deaths
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ display: "inline" }}
                  >
                    {this.props.XStats.deaths
                      ? this.props.XStats.deaths.toLocaleString()
                      : "unconfirmed"}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    style={{ color: "red", display: "inline", marginLeft: 10 }}
                  >
                    {this.props.XStats.todayDeaths ? "+" : null}
                    {this.props.XStats.todayDeaths
                      ? this.props.XStats.todayDeaths.toLocaleString()
                      : null}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5 }}
                  >
                    {(
                      this.props.XStats.deaths / this.props.XStats.cases
                    ).toLocaleString(undefined, {
                      style: "percent",
                      minimumFractionDigits: 2,
                    })}{" "}
                    of Confirmed Cases
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-10 offset-xs-1 col-lg-6">
              <Card style={{ marginBottom: "10px" }}>
                <CardContent>

                <Tabs value={this.state.totalTabValue} onChange={this.handleTotalChange} aria-label="basic tabs example">
          <Tab label="Cases (Total)"  />
          <Tab label="Cases (Log)"  />
        </Tabs>

      <div
      role="tabpanel"
      hidden={this.state.totalTabValue !== 0}
      id={`simple-tabpanel-0`}
      aria-labelledby={`simple-tab-0`}
    >
               <canvas id="canvasCountry"></canvas>

    </div>

    <div
      role="tabpanel"
      hidden={this.state.totalTabValue !== 1}
      id={`simple-tabpanel-1`}
      aria-labelledby={`simple-tab-1`}
    >
               <canvas id="canvasCountryLog"></canvas>

    </div>

                </CardContent>
              </Card>
            </div>
            <div className= 'col-xs-10 offset-xs-1 col-lg-6'>
              <Card style={{ marginBottom: "10px" }}>
                <CardContent>
                <Tabs value={this.state.tabValue} onChange={this.handleChange} aria-label="basic tabs example">
          <Tab label="Daily Cases"  />
          <Tab label="Daily Deaths"  />
        </Tabs>

      <div
      role="tabpanel"
      hidden={this.state.tabValue !== 0}
      id={`simple-tabpanel-0`}
      aria-labelledby={`simple-tab-0`}
    >
               <canvas id="canvasCountryDaily"></canvas>

    </div>

    <div
      role="tabpanel"
      hidden={this.state.tabValue !== 1}
      id={`simple-tabpanel-1`}
      aria-labelledby={`simple-tab-1`}
    >
               <canvas id="canvasCountryDailyDeath"></canvas>

    </div>

                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {this.props.XProvinceHistory.length > 1 ? (
          <div>
            <this.ProvinceHeader />
            <this.ProvinceCards />
            <div className="row">
              <div className="col-xs-12 col-lg-6">
                <Card style={{ marginBottom: "10px" }}>
                  <CardContent>

                  <Tabs value={this.state.tabProvinceValue} onChange={this.handleProvinceCasesChange} aria-label="basic tabs example">
          <Tab label="Cases (total)"  />
          <Tab label="Cases (log)"  />
        </Tabs>

      <div
      role="tabpanel"
      hidden={this.state.tabProvinceValue !== 0}
      id={`simple-tabpanel-0`}
      aria-labelledby={`simple-tab-0`}
    >
               <canvas id="canvasProvinceCases"></canvas>

    </div>

    <div
      role="tabpanel"
      hidden={this.state.tabProvinceValue !== 1}
      id={`simple-tabpanel-1`}
      aria-labelledby={`simple-tab-1`}
    >
               <canvas id="canvasProvinceCasesLog"></canvas>

    </div>

                  </CardContent>
                </Card>
              </div>
              <div className="col-xs-10 offset-xs-1 col-lg-6">
                <Card style={{ marginBottom: "10px" }}>
                  <CardContent>
                  <Tabs value={this.state.tabProvinceDeathValue} onChange={this.handleProvinceDeathsChange} aria-label="basic tabs example">
          <Tab label="Cases (total)"  />
          <Tab label="Cases (log)"  />
        </Tabs>

      <div
      role="tabpanel"
      hidden={this.state.tabProvinceDeathValue !== 0}
      id={`simple-tabpanel-0`}
      aria-labelledby={`simple-tab-0`}
    >
               <canvas id="canvasProvinceDeaths"></canvas>

    </div>

    <div
      role="tabpanel"
      hidden={this.state.tabProvinceDeathValue !== 1}
      id={`simple-tabpanel-1`}
      aria-labelledby={`simple-tab-1`}
    >
               <canvas id="canvasProvinceDeathsLog"></canvas>

    </div>

                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        ) : null}

{this.state.VaccineInfo ?
<div>
<hr/>
<h1 class="display-4 text-center" id="vaccine-text"  style = {{fontSize: "3rem", margin: 25}}>
          Vaccinations
        </h1>
        <hr />

        <div className="row">
          <div className="col-xs-10 offset-xs-1 col-lg-6">
            <Card style={{ marginBottom: "10px" }}>
              <CardContent>
                <canvas id="canvasVaccine"></canvas>
              </CardContent>
            </Card>
          </div>
          
          <div className="col-xs-10 offset-xs-1 col-lg-6">
            <Card style={{ marginBottom: "10px" }}>
              <CardContent>
                <canvas id="canvasVaccineDaily"></canvas>
              </CardContent>
            </Card>
          </div>
            
        </div>
      </div> 
      : 
      <div>
        <hr/>
<h1 class="display-4 text-center" id="vaccine-text"  style = {{fontSize: "3rem", margin: 25}}>
          Vaccination Data Currently Unavailable
        </h1>
        </div>
        }
      <Footer cases = {this.props.cases}/>
      </div>
    );
  }
}

export default CountryPage;
