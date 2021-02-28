import "./index.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Chart from "chart.js";
import "./utils";
import MediaCard from "./GlobalCards";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ContinentCharts from "./ContinentCharts";
import ContinentCards from "./ContinentCards";
import GlobalTable from "./GlobalTable";
import TopCountryCard from "./TopCountryCard";

class GlobalGraphs extends React.Component {
  constructor(props) {
    super(props);
    this.worldConfirmedChart = this.worldConfirmedChart.bind(this);
    this.worldConfirmedLogChart = this.worldConfirmedLogChart.bind(this);
  }

  componentDidMount() {
    this.worldConfirmedChart();
    this.worldConfirmedLogChart();
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
          <TopCountryCard
            casesCountries={this.props.casesCountries}
            cases={this.props.cases}
          />
          <GlobalTable casesCountries={this.props.casesCountries} />
          <div className="row">
            <div className="col-12 text-center">
              <p style={{ textAlign: "center", fontSize: "1rem" }}>
                Last Updated: {new Date(this.props.cases["updated"]).toString()}
              </p>
            </div>

            <div className="col-12 text-center">
              <hr />
              <p id="olivera" style={{ textAlign: "center", fontSize: "1rem" }}>
                developed by <a href="https://www.olivera.tech">olivera.tech</a>
              </p>
            </div>
          </div>
          {/* <CanadaGraph historyConfirmed = {this.state.historyConfirmed} /> */}
        </div>
      </div>
    );
  }
}

export default GlobalGraphs;
