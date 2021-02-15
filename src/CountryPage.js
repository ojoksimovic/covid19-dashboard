import "./index.css";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Chart from "chart.js";
import "./utils";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
// import colourThemeArray from "./ColourTheme"

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
  'rgb(255, 99, 132)',
  'rgb(255, 159, 64)',
  'rgb(255, 205, 86)',
  'rgb(75, 192, 192)',
  'rgb(54, 162, 235)',
  'rgb(153, 102, 255)',
  'rgb(201, 203, 207)',
  '#4dc9f6',
  '#f67019',
  '#f53794',
  '#537bc4',
  '#acc236',
  '#166a8f',
  '#00a950',
  '#58595b',
  '#8549ba'
];
let provinceCasesData = [];
let provinceDeathsData = [];
let date = [];

function CountryPage({ XStats, XProvinceHistory, XCountry }) {
  const classes = useStyles();
  let XHistoryStats;

  useEffect(() => {
    fetchCountryData();
    // return () => console.log("cleanup");
  });

  function fetchCountryData() {
    let countryURL =
      "https://disease.sh/v3/covid-19/historical/" + XCountry + "?lastdays=all";
    axios.all([axios.get(countryURL)]).then(
      axios.spread((req1) => {
        XHistoryStats = req1.data;
        countryHistoricalChart();
        countryHistoricalLogChart();
        provinceData();
      })
    );
  }

  function capitalizeFirstLetter(mySentence) {
    const words = mySentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    let newName = words.join(" ");
    return newName
  }

  function ProvinceCards() {
    let provinceCardData = [];
    let provinceCases;
    let provinceDeaths;
    let provinceRecovered;
    console.log(XStats);

    for (let i = 0; i < XProvinceHistory.length; i++) {
      provinceCases = Object.values(XProvinceHistory[i].timeline.cases)
      provinceDeaths = Object.values(XProvinceHistory[i].timeline.deaths)
      provinceRecovered = Object.values(XProvinceHistory[i].timeline.recovered)
      provinceCardData.push(

        <div className="col-6 col-md-4 col-lg-3">
          <Card
            className={classes.root}
            style={{ borderTop: colourThemeArray[i] + " 5px solid" }}
          >
            <CardContent>
              <Typography gutterBottom variant="h6">
                {capitalizeFirstLetter(XProvinceHistory[i].province)}
              </Typography>
              <Typography gutterBottom variant="body1" style={{ marginBottom: 0 }}>
                {provinceCases[provinceCases.length - 1].toLocaleString()} cases
          </Typography>
              <Typography gutterBottom variant="body1" color="secondary" style={{ marginBottom: 0 }}>
                {provinceDeaths[provinceDeaths.length - 1].toLocaleString()} deaths
          </Typography>
              <Typography gutterBottom variant="body1" style={{ color: "green" }}>
                {provinceRecovered[provinceRecovered.length - 1].toLocaleString()} recovered
          </Typography>

              <Typography variant="body1" component="p" color="textSecondary" style={{ marginBottom: 0, fontSize: "0.8rem" }}>
                {(provinceCases[provinceCases.length - 1] / XStats.cases).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })} of total country cases
          </Typography>

              <Typography variant="body1" component="p" color="secondary" style={{ marginBottom: 0, fontSize: "0.8rem" }}>
                {(provinceDeaths[provinceDeaths.length - 1] / XStats.deaths).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })} of total country deaths
          </Typography>

              {/* <Typography variant="body1" component="p" color = "textSecondary" style={{marginTop: 0, fontSize: "0.8rem"}}>
            {(fatalityRateCountry[i].toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}))} fatality rate
          </Typography> */}
            </CardContent>
          </Card>
        </div>
      )
    }

    return (
      <div className="container-fluid">
        <div className="row">
          {provinceCardData}
        </div>
        <hr />
      </div>
    )
  }
  function ProvinceHeader() {
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

  function provinceChart(data, title, canvasid, yaxis) {
    var config = {
      type: "line",
      data: {
        labels: date,
        datasets: data,
      },
      options: {
        legend: {
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
                labelString: title
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

  function provinceData() {
    if (XProvinceHistory.length > 1) {
      console.log(XProvinceHistory);
      date = Object.keys(XProvinceHistory[0].timeline.cases)
      for (let i = 0; i < XProvinceHistory.length; i++) {
        provinceCasesData.push({
          label: capitalizeFirstLetter(XProvinceHistory[i].province),
          backgroundColor: colourThemeArray[i],
          borderColor: colourThemeArray[i],
          data: Object.values(XProvinceHistory[i].timeline.cases),
          fill: false,
        });
        provinceDeathsData.push({
          label: capitalizeFirstLetter(XProvinceHistory[i].province),
          backgroundColor: colourThemeArray[i],
          borderColor: colourThemeArray[i],
          data: Object.values(XProvinceHistory[i].timeline.deaths),
          fill: false,
        });
      }
      provinceChart(provinceCasesData, "Cases", "canvasProvinceCases", "linear");
      provinceChart(provinceCasesData, "Cases (Log)", "canvasProvinceCasesLog", "logarithmic");
      provinceChart(provinceDeathsData, "Deaths", "canvasProvinceDeaths", "linear");
      provinceChart(provinceDeathsData, "Deaths (Log)", "canvasProvinceDeathsLog", "logarithmic");
      console.log(provinceCasesData[0].data[provinceCasesData[0].data.length - 1])
    }
  }

  // function tables(){

  // }

  function countryHistoricalChart() {
    var date = Object.keys(XHistoryStats.timeline.cases);
    var data1 = Object.values(XHistoryStats.timeline.cases);
    var data2 = Object.values(XHistoryStats.timeline.deaths);
    var data3 = Object.values(XHistoryStats.timeline.recovered);
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
        legend: {
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

  function countryHistoricalLogChart() {
    var date = Object.keys(XHistoryStats.timeline.cases);
    var data1 = Object.values(XHistoryStats.timeline.cases);
    var data2 = Object.values(XHistoryStats.timeline.deaths);
    var data3 = Object.values(XHistoryStats.timeline.recovered);
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


  return (
    <div className="container-fluid  text-center">
      <div className="text-center">
        <h1 class="display-4" id="title-text">
          {XCountry}
        </h1>
        <hr />
        <p id="population-text">
          Population: {XStats.population.toLocaleString()}
        </p>
        <hr />

        <div className="row">
          <div className="col-xs-8 offset-xs-2 col-sm-6 col-lg-3">
            <Card
              className={classes.root}
              style={{ borderTop: "#00A6B4 5px solid" }}
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
                  {XStats.cases.toLocaleString()}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  style={{ color: "red", display: "inline", marginLeft: 10 }}
                >
                  {XStats.todayCases ? "+" : null}
                  {XStats.todayCases
                    ? XStats.todayCases.toLocaleString()
                    : null}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="p"
                  style={{ marginTop: 5 }}
                >
                  {(XStats.cases / XStats.population).toLocaleString(
                    undefined,
                    { style: "percent", minimumFractionDigits: 2 }
                  )}{" "}
                  of Population
                </Typography>
              </CardContent>
            </Card>
          </div>

          <div className="col-xs-8 offset-xs-2 col-sm-6 col-lg-3">
            <Card
              className={classes.root}
              style={{ borderTop: "#C9DE00 5px solid" }}
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
                  {XStats.active.toLocaleString()}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  style={{
                    color:
                      XStats.todayCases - XStats.todayRecovered < 0
                        ? "green"
                        : "red",
                    display: "inline",
                    marginLeft: 10,
                  }}
                >
                  {XStats.todayCases - XStats.todayRecovered > 0
                    ? "+" +
                    (
                      XStats.todayCases - XStats.todayRecovered
                    ).toLocaleString()
                    : ""}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="p"
                  style={{ marginTop: 5 }}
                >
                  {XStats.critical.toLocaleString()} Remain in Critical
                  Condition
                </Typography>
              </CardContent>
            </Card>
          </div>

          <div className="col-xs-8 offset-xs-2 col-sm-6 col-lg-3">
            <Card
              className={classes.root}
              style={{ borderTop: "#2FDE00 5px solid" }}
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
                  {XStats.recovered.toLocaleString()}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="p"
                  style={{ color: "green", display: "inline", marginLeft: 10 }}
                >
                  {XStats.todayRecovered ? "+" : null}
                  {XStats.todayRecovered
                    ? XStats.todayRecovered.toLocaleString()
                    : null}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="p"
                  style={{ marginTop: 5 }}
                >
                  {(XStats.recovered / XStats.cases).toLocaleString(undefined, {
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
              className={classes.root}
              style={{ borderTop: "#B21F00 5px solid" }}
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
                  {XStats.deaths.toLocaleString()}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  style={{ color: "red", display: "inline", marginLeft: 10 }}
                >
                  {XStats.todayDeaths ? "+" : null}
                  {XStats.todayDeaths
                    ? XStats.todayDeaths.toLocaleString()
                    : null}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="p"
                  style={{ marginTop: 5 }}
                >
                  {(XStats.deaths / XStats.cases).toLocaleString(undefined, {
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

      {XProvinceHistory.length > 1 ? (
        <div>
          <ProvinceHeader />
          <ProvinceCards />
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
    </div>
  );
}

export default CountryPage;
