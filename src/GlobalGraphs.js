import { Tab, Tabs } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "bootstrap/dist/css/bootstrap.min.css";
import Chart from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";
import ContinentCards from "./ContinentCards";
import ContinentCharts from "./ContinentCharts";
import Footer from "./Footer";
import MediaCard from "./GlobalCards";
import EnhancedTable from "./MUIGlobalTable";
import TopCountryCard from "./TopCountryCard";
import "./index.css";
import "./utils";

let backGroundColorArray = [
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

class GlobalGraphs extends React.Component {
  constructor(props) {
    super(props);
    this.worldConfirmedChart = this.worldConfirmedChart.bind(this);
    this.worldConfirmedLogChart = this.worldConfirmedLogChart.bind(this);
    this.worldVaccineChart = this.worldVaccineChart.bind(this);
    this.worldDailyChart = this.worldDailyChart.bind(this);
    this.worldDailyDeathChart = this.worldDailyDeathChart.bind(this);
    this.worldVaccineDailyChart = this.worldVaccineDailyChart.bind(this);

    this.state = {
      tabValue: 0,
      tabValue2: 0,
    };
  }

  componentDidMount() {
    this.worldConfirmedChart();
    this.worldConfirmedLogChart();
    this.worldDailyChart();
    this.worldDailyDeathChart();
    this.worldVaccineChart();
    this.worldVaccineDailyChart();
  }



  worldVaccinePie2() {
    var vaccineArray = [];
    let vacn;
    let vaccineNumber;

    for (let i = 0; i < this.props.vaccineCountries?.length; i++) {
      vacn = Object.values(this.props.vaccineCountries[i]["timeline"]);
      vaccineNumber = vacn[vacn?.length - 1];
      if (vaccineNumber > 0) {
        vaccineArray[this.props.vaccineCountries[i].country] = vaccineNumber;
      }
    }

    let labelVaccine = Object.keys(vaccineArray);
    let arrayVaccinated = Object.values(vaccineArray);
    return (
      <Card style={{ marginBottom: "10px" }}>
        <CardContent>
          <Pie
            data={{
              labels: labelVaccine,
              datasets: [
                {
                  label: "Vaccinated",
                  backgroundColor: backGroundColorArray,
                  hoverBackgroundColor: backGroundColorArray,
                  data: arrayVaccinated,
                },
              ],
            }}
            options={{
              title: {
                display: true,
                text: "Global Vaccines Administered",
                fontSize: 20,
              },
              legend: {
                labels: {
                  usePointStyle: true,
                },
                display: false,
                position: "right",
              },
              tooltips: {
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
            }}
          />
        </CardContent>
      </Card>
    );
  }

  worldVaccineChart() {
    var date = Object.keys(this.props.vaccineGlobal);
    var data1 = Object.values(this.props.vaccineGlobal);
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
        aspectRatio: 2,
        legend: {
          labels: {
            usePointStyle: true,
          },
          display: false,
          position: "bottom",
        },
        responsive: true,
        title: {
          display: false,
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

  worldVaccineDailyChart() {
    var date = Object.keys(this.props.vaccineGlobal);
    var data1 = [];
    for (let i = 0; i < date.length; i++){
      data1.push(this.props.vaccineGlobal[date[i]]- this.props.vaccineGlobal[date[i-1]])
    }
    var config ={
    type: 'bar',
      data: {
        labels: date,
        datasets: [
          {
            label: "Vaccinations",
            backgroundColor: "rgb(54, 162, 235)",
            borderColor: "rgb(54, 162, 235)",
            data: data1,
          },
        ],
      },
    options: {
      aspectRatio: 2,
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
    }}

    var ctx = document.getElementById("canvasVaccineDaily").getContext("2d");
    window.myLine = new Chart(ctx, config);

    var colorNames = Object.keys(window.chartColors);
  }

  worldConfirmedChart() {
    var date = Object.keys(this.props.historyGlobal.cases);
    var data1 = Object.values(this.props.historyGlobal.cases);
    var data2 = Object.values(this.props.historyGlobal.deaths);
    var data3 = Object.values(this.props.historyGlobal.recovered);
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
    var ctx = document.getElementById("canvasConfirmed").getContext("2d");
    window.myLine = new Chart(ctx, config);

    var colorNames = Object.keys(window.chartColors);
  }

  worldConfirmedLogChart() {
    var date = Object.keys(this.props.historyGlobal.cases);
    var data1 = Object.values(this.props.historyGlobal.cases);
    var data2 = Object.values(this.props.historyGlobal.deaths);
    var data3 = Object.values(this.props.historyGlobal.recovered);
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
        legend: {
          labels: {
            usePointStyle: true,
          },
          display: true,
          position: "bottom",
        },
        responsive: true,
        aspectRatio: 1.5,
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
    var ctx = document.getElementById("canvasConfirmedLog").getContext("2d");
    window.myLine = new Chart(ctx, config);

    var colorNames = Object.keys(window.chartColors);
  }

  worldDailyChart() {
    var date = Object.keys(this.props.historyGlobal.cases);
    var data1 = [];
    for (let i = 0; i < date?.length; i++) {
      data1.push(
        this.props.historyGlobal.cases[date[i]] -
          this.props.historyGlobal.cases[date[i - 1]]
      );
    }

    var config = {
      type: "bar",
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
                labelString: "Time",
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
          ],
        },
      },
    };

    var ctx = document.getElementById("canvasWorldDaily").getContext("2d");
    window.myLine = new Chart(ctx, config);

    var colorNames = Object.keys(window.chartColors);
  }

  worldDailyDeathChart() {
    var date = Object.keys(this.props.historyGlobal.cases);
    var data1 = [];
    for (let i = 0; i < date?.length; i++) {
      data1.push(
        this.props.historyGlobal.deaths[date[i]] -
          this.props.historyGlobal.deaths[date[i - 1]]
      );
    }

    var config = {
      type: "bar",
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
                labelString: "Time",
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
          ],
        },
      },
    };

    var ctx = document.getElementById("canvasWorldDailyDeath").getContext("2d");
    window.myLine = new Chart(ctx, config);

    var colorNames = Object.keys(window.chartColors);
  }

  handleChange = (event, newValue) => {
    this.setState({
      tabValue: newValue,
    });
  };

  handleChange2 = (event, newValue) => {
    this.setState({
      tabValue2: newValue,
    });
  };

  render() {
    return (
      <div>
        <h1 class="display-4 text-center" id="title-text">
          Global Covid-19
        </h1>
        <hr />
        <div className="GlobalGraphs container-fluid">
          <MediaCard data={this.props.cases} />
          <hr />
          <div className="row">
            <div className="col-xs-10 offset-xs-1 col-lg-6">
              <Card style={{ marginBottom: "10px" }}>
                <CardContent>
                  <Tabs
                    value={this.state.tabValue}
                    onChange={this.handleChange}
                  >
                    <Tab label="Cases (total)" />
                    <Tab label="Cases (log)" />
                  </Tabs>

                  <div
                    hidden={this.state.tabValue !== 0}
                  >
                    <canvas id="canvasConfirmed"></canvas>
                    <canvas id="canvasConfirmedLog"></canvas>
                  </div>

                  <div
                    role="tabpanel"
                    hidden={this.state.tabValue !== 1}
                    aria-labelledby={`simple-tab-1`}
                  >

                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-xs-10 offset-xs-1 col-lg-6">

              <Card style={{ marginBottom: "10px" }}>
                <CardContent>
                  
                  <Tabs
                    value={this.state.tabValue2}
                    onChange={this.handleChange2}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Daily Cases" />
                    <Tab label="Daily Deaths" />
                  </Tabs>

                  <div
                    // hidden={this.state.tabValue2 !== 0}
                    aria-labelledby={`simple-tab-0`}
                  >
                    <canvas id="canvasWorldDaily"></canvas>
                    <canvas id="canvasWorldDailyDeath"></canvas>
                  </div>

                  <div
                    role="tabpanel"
                    // hidden={this.state.tabValue2 !== 1}
                    aria-labelledby={`simple-tab-1`}
                  >

                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <hr />

          <ContinentCards casesContinents={this.props.casesContinents} />
          <ContinentCharts casesContinents={this.props.casesContinents} />

          <h1
            class="display-4 text-center"
            id="vaccine-text"
            style={{ fontSize: "3rem", margin: 25 }}
          >
            Global COVID-19 Vaccines
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
          <div className="row">
            <div className="col-xs-10 offset-xs-1 col-md-6 offset-md-3">
              {this.worldVaccinePie2()}
            </div>

          </div>
          <hr />

          <TopCountryCard
            casesCountries={this.props.casesCountries}
            cases={this.props.cases}
          />
          <EnhancedTable
            casesCountries={this.props.casesCountries}
            vaccineCountries={this.props.vaccineCountries}
          />
          <Footer cases={this.props.cases} />
        </div>
      </div>
    );
  }
}

export default GlobalGraphs;
