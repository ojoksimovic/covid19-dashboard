import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Chart from "chart.js";
import "./utils";
import MediaCard from "./GlobalCards";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ContinentCharts from "./ContinentCharts";
import ContinentCards from "./ContinentCards";
import axios from 'axios';
import GlobalTable from "./GlobalTable";

class GlobalGraphs extends React.Component {
  constructor(props) {
    super(props);

    this.worldDeathChart = this.worldDeathChart.bind(this);
    this.worldConfirmedChart = this.worldConfirmedChart.bind(this);
    this.worldDeathLogChart = this.worldDeathLogChart.bind(this);
    this.worldConfirmedLogChart = this.worldConfirmedLogChart.bind(this);

    this.state = {
      historyGlobal: null,
      historyCountries: null,
      cases: null,
      casesContinents: null,
      casesCountries: null
    };
  }

  componentDidMount() {
    axios.all([
      axios.get('https://disease.sh/v3/covid-19/all?yesterday=false'),
      axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all'),
      axios.get('https://disease.sh/v3/covid-19/historical?lastdays=all'),
      axios.get('https://disease.sh/v3/covid-19/continents?yesterday=false&twoDaysAgo=false&allowNull=true'),
      axios.get('https://disease.sh/v3/covid-19/countries?yesterday=false&twoDaysAgo=false&sort=cases&allowNull=true')
    ])
    .then(axios.spread((req1, req2, req3, req4, req5) => {
      this.setState({
        cases: req1.data,
        historyGlobal: req2.data,
        historyCountries: req3.data,
        casesContinents: req4.data,
        casesCountries: req5.data
      });
      this.worldDeathChart();
      this.worldConfirmedChart(); 
      this.worldDeathLogChart();
      this.worldConfirmedLogChart();
    }));
  }

  worldConfirmedChart() {
    var date = Object.keys(this.state.historyGlobal.cases);
    var data1 = Object.values(this.state.historyGlobal.cases);
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
        ],
      },
      options: {
        legend: {
          display: false,
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
            label: function(tooltipItem, data) {
              var dataLabel = data.labels[tooltipItem.index];
              var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();
    
              if (Chart.helpers.isArray(dataLabel)) {
                dataLabel = dataLabel.slice();
                dataLabel[0] += value;
              } else {
                dataLabel += value;
              }
              return dataLabel;
            }
          }
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
    var date = Object.keys(this.state.historyGlobal.cases);
    var data1 = Object.values(this.state.historyGlobal.cases);
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
        ],
      },
      options: {
        legend: {
          display: false,
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
            label: function(tooltipItem, data) {
              var dataLabel = data.labels[tooltipItem.index];
              var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();
    
              if (Chart.helpers.isArray(dataLabel)) {
                dataLabel = dataLabel.slice();
                dataLabel[0] += value;
              } else {
                dataLabel += value;
              }
              return dataLabel;
            }
          }
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

  worldDeathChart() {
    var date = Object.keys(this.state.historyGlobal.deaths);
    var data1 = Object.values(this.state.historyGlobal.deaths);
    var config = {
      type: "line",
      data: {
        labels: date,
        datasets: [
          {
            label: "Global",
            backgroundColor: "#B21F00",
            borderColor: "#B21F00",
            data: data1,
            fill: false,
          },
        ],
      },
      options: {
        legend: {
          display: false,
          position: "bottom",
        },
        responsive: true,
        title: {
          display: true,
          text: "Deaths",
          fontSize: 20,
        },
        tooltips: {
          mode: "index",
          intersect: false,
          callbacks: {
            label: function(tooltipItem, data) {
              var dataLabel = data.labels[tooltipItem.index];
              var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();
    
              if (Chart.helpers.isArray(dataLabel)) {
                dataLabel = dataLabel.slice();
                dataLabel[0] += value;
              } else {
                dataLabel += value;
              }
              return dataLabel;
            }
          }
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
    var ctx = document.getElementById("canvasDeaths").getContext("2d");
    window.myLine = new Chart(ctx, config);

    var colorNames = Object.keys(window.chartColors);
  }

  worldDeathLogChart() {
    var date = Object.keys(this.state.historyGlobal.deaths);
    var data1 = Object.values(this.state.historyGlobal.deaths);
    var config = {
      type: "line",
      data: {
        labels: date,
        datasets: [
          {
            label: "Global",
            backgroundColor: "#B21F00",
            borderColor: "#B21F00",
            data: data1,
            fill: false,
          },
        ],
      },
      options: {
        legend: {
          display: false,
          position: "bottom",
        },
        responsive: true,
        title: {
          display: true,
          text: "Deaths (Log)",
          fontSize: 20,
        },
        tooltips: {
          mode: "index",
          intersect: false,
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
                beginAtZero: true
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
    var ctx = document.getElementById("canvasDeathsLog").getContext("2d");
    window.myLine = new Chart(ctx, config);

    var colorNames = Object.keys(window.chartColors);
  }

  


  render() {

    if (this.state.cases == null || this.state.historyCountries == null || this.state.casesContinents == null) {
      return (
        <div class="text-center">
          
  <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
    <span className="visually-hidden"></span>
  </div>
  <h3 id = "loading-text">Loading...</h3>
</div>
      )
    }
    return (
      <div className="GlobalGraphs container-fluid">
              <MediaCard data = {this.state.cases} />
              <hr/>
        <div className="row">
          <div className="col-xs-10 offset-xs-1 col-lg-6">
            <Card style = {{marginBottom: "10px"}}><CardActionArea><CardContent><canvas id="canvasConfirmed"></canvas></CardContent></CardActionArea></Card>
          </div>
          <div className="col-xs-10 offset-xs-1 col-lg-6">
          <Card style = {{marginBottom: "10px"}}><CardActionArea><CardContent><canvas id="canvasConfirmedLog"></canvas></CardContent></CardActionArea></Card>
          </div>
          </div>
          <div className = "row">
          <div className="col-xs-10 offset-xs-1 col-lg-6">
          <Card style = {{marginBottom: "10px"}}><CardActionArea><CardContent><canvas id="canvasDeaths"></canvas></CardContent></CardActionArea></Card>
          </div>
          <div className="col-xs-10 offset-xs-1 col-lg-6">
          <Card style = {{marginBottom: "10px"}}><CardActionArea><CardContent><canvas id="canvasDeathsLog"></canvas></CardContent></CardActionArea></Card>
          </div>
        </div>
        <hr/>
        <ContinentCards casesContinents = {this.state.casesContinents} />
        <ContinentCharts casesContinents = {this.state.casesContinents} />
        <GlobalTable casesCountries = {this.state.casesCountries}/>
        <div className = "row">
      <div className = "col-12 text-center">
        <p style = {{textAlign:"center", fontSize: "1rem"}}>Last Updated: {(new Date(this.state.cases["updated"])).toString()}</p>
      </div>
      <hr/>
      <div className = "col-12 text-center">
      <p id = "olivera" style = {{textAlign:"center", fontSize: "1rem"}}>developed by <a href = "https://www.olivera.tech">olivera.tech</a></p>

      </div>
      </div>
        {/* <CanadaGraph historyConfirmed = {this.state.historyConfirmed} /> */}
      </div>
      
    );
  }
}

export default GlobalGraphs;
