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

let colourThemeArray = [
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

    this.state = {
      XVaccineStats: null,
      XHistoryStats: null,
      VaccineInfo: null,
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
        this.setState({
          VaccineInfo: "Available"
        });
      }
      
            }
            this.countryVaccineChart();
            
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
    console.log(this.props.XStats);

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
          <Card style={{ borderTop: colourThemeArray[i] + " 5px solid" }}>
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
        <div className="row">{this.provinceCardData}</div>
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
      console.log(this.props.XProvinceHistory);
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
            backgroundColor: "#00A6B4",
            borderColor: "#00A6B4",
            data: data1,
            fill: false,
          },
          {
            label: "Deaths",
            backgroundColor: "#B21F00",
            borderColor: "#B21F00",
            data: data2,
            fill: false,
          },
          {
            label: "Recovered",
            backgroundColor: "#2FDE00",
            borderColor: "#2FDE00",
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
            backgroundColor: "#00A6B4",
            borderColor: "#00A6B4",
            data: data1,
            fill: false,
          },
          {
            label: "Deaths",
            backgroundColor: "#B21F00",
            borderColor: "#B21F00",
            data: data2,
            fill: false,
          },
          {
            label: "Recovered",
            backgroundColor: "#2FDE00",
            borderColor: "#2FDE00",
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
                style={{ marginBottom: 10, borderTop: "#00A6B4 5px solid" }}
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
                style={{ marginBottom: 10, borderTop: "#C9DE00 5px solid" }}
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
                style={{ marginBottom: 10, borderTop: "#2FDE00 5px solid" }}
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
                style={{ marginBottom: 10, borderTop: "#B21F00 5px solid" }}
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
                  <canvas id="canvasCountry"></canvas>
                </CardContent>
              </Card>
            </div>
            <div className="col-xs-10 offset-xs-1 col-lg-6">
              <Card style={{ marginBottom: "10px" }}>
                <CardContent>
                  <canvas id="canvasCountryLog"></canvas>
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
                    <canvas id="canvasProvinceCases"></canvas>
                  </CardContent>
                </Card>
              </div>
              <div className="col-xs-12 col-lg-6">
                <Card style={{ marginBottom: "10px" }}>
                  <CardContent>
                    <canvas id="canvasProvinceCasesLog"></canvas>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-10 offset-xs-1 col-lg-6">
                <Card style={{ marginBottom: "10px" }}>
                  <CardContent>
                    <canvas id="canvasProvinceDeaths"></canvas>
                  </CardContent>
                </Card>
              </div>
              <div className="col-xs-10 offset-xs-1 col-lg-6">
                <Card style={{ marginBottom: "10px" }}>
                  <CardContent>
                    <canvas id="canvasProvinceDeathsLog"></canvas>
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
          
            <CountryVaccinePie
              XVaccineCountries={this.props.XVaccineCountries}
              XStats={this.props.XStats}
              XCountry = {this.props.XCountry}
            />
            
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
