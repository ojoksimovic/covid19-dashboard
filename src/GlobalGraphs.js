import "./index.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Chart from "chart.js";
import { Pie } from "react-chartjs-2";
import "./utils";
import MediaCard from "./GlobalCards";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ContinentCharts from "./ContinentCharts";
import ContinentCards from "./ContinentCards";
import GlobalTable from "./GlobalTable";
import TopCountryCard from "./TopCountryCard";
import Footer from "./Footer";
import EnhancedTable from "./MUIGlobalTable";

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
  }

  componentDidMount() {
    this.worldConfirmedChart();
    this.worldConfirmedLogChart();
    this.worldVaccineChart();
  }

  worldVaccinePie() {
    let labelVaccine = ["Vaccinated", "Not Vaccinated"];
    var vac = Object.values(this.props.vaccineGlobal);
    let totalVaccinated = vac[vac.length - 1]/2;
    let totalUnVaccinated = this.props.cases.population - totalVaccinated;
    let arrayVaccinated = [totalVaccinated, totalUnVaccinated];
    let percentVaccinated = (
      totalVaccinated / this.props.cases.population
    ).toLocaleString(undefined, { style: "percent", minimumFractionDigits: 2 });

    return (
      <Card style={{ marginBottom: "10px" }}>
        <CardContent>
          <Pie
            data={{
              labels: labelVaccine,
              datasets: [
                {
                  label: "Vaccinated",
                  backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
                  hoverBackgroundColor: [
                    "rgb(54, 162, 235)",
                    "rgb(255, 99, 132)",
                  ],
                  data: arrayVaccinated,
                },
              ],
            }}
            options={{
              title: {
                display: true,
                text: percentVaccinated + " of Global Population Vaccinated (assuming double dose)",
                fontSize: 20,
              },
              legend: {
                labels: {
                  usePointStyle: true,
                },
                display: true,
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

  worldVaccinePie2() {
    var vaccineArray = [];
    let vacn;
    let vaccineNumber;

    for (let i = 0; i < this.props.vaccineCountries.length; i++) {
      vacn = Object.values(this.props.vaccineCountries[i]["timeline"]);
      vaccineNumber = vacn[vacn.length - 1];
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
                  <canvas aspectRatio="1" id="canvasConfirmed"></canvas>
                </CardContent>
              </Card>
            </div>
            <div className="col-xs-10 offset-xs-1 col-lg-6">
              <Card style={{ marginBottom: "10px" }}>
                <CardContent>
                  <canvas id="canvasConfirmedLog"></canvas>
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
            <div className="col-xs-10 offset-xs-1 col-lg-6 offset-lg-3">
              <Card style={{ marginBottom: "10px" }}>
                <CardContent>
                  <canvas id="canvasVaccine"></canvas>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-10 offset-xs-1 col-md-6">
              {this.worldVaccinePie2()}
            </div>
            <div className="col-xs-10 offset-xs-1 col-md-6">
              {this.worldVaccinePie()}
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
