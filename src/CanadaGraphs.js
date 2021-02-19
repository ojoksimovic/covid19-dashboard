import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Chart from "chart.js";
import "./utils";

function CanadaGraph({historyConfirmed}) {

        var date = Object.keys(
          historyConfirmed.Canada.All.dates
        ).reverse();
        var data1 = Object.values(
          historyConfirmed.Canada["Alberta"].dates
        ).reverse();
        var data2 = Object.values(
          historyConfirmed.Canada["British Columbia"].dates
        ).reverse();
        var data3 = Object.values(
          historyConfirmed.Canada["Manitoba"].dates
        ).reverse();
        var data4 = Object.values(
          historyConfirmed.Canada["New Brunswick"].dates
        ).reverse();
        var data5 = Object.values(
          historyConfirmed.Canada["Newfoundland and Labrador"].dates
        ).reverse();
        var data6 = Object.values(
          historyConfirmed.Canada["Northwest Territories"].dates
        ).reverse();
        var data7 = Object.values(
          historyConfirmed.Canada["Nova Scotia"].dates
        ).reverse();
        var data8 = Object.values(
          historyConfirmed.Canada["Nunavut"].dates
        ).reverse();
        var data9 = Object.values(
          historyConfirmed.Canada["Ontario"].dates
        ).reverse();
        var data10 = Object.values(
          historyConfirmed.Canada["Prince Edward Island"].dates
        ).reverse();
        var data11 = Object.values(
          historyConfirmed.Canada["Quebec"].dates
        ).reverse();
        var data12 = Object.values(
          historyConfirmed.Canada["Yukon"].dates
        ).reverse();
    
        var config = {
          type: "line",
          data: {
            labels: date,
            datasets: [
              {
                label: "Alberta",
                backgroundColor: window.chartColors.red,
                borderColor: window.chartColors.red,
                data: data1,
                fill: false,
              },
              {
                label: "British Columbia",
                fill: false,
                backgroundColor: window.chartColors.blue,
                borderColor: window.chartColors.blue,
                data: data2,
              },
              {
                label: "Manitoba",
                fill: false,
                backgroundColor: window.chartColors.green,
                borderColor: window.chartColors.green,
                data: data3,
              },
              {
                label: "New Brunswick",
                fill: false,
                backgroundColor: window.chartColors.purple,
                borderColor: window.chartColors.purple,
                data: data4,
              },
              {
                label: "Newfoundland and Labrador",
                fill: false,
                backgroundColor: window.chartColors.yellow,
                borderColor: window.chartColors.yellow,
                data: data5,
              },
              {
                label: "Northwest Territories",
                fill: false,
                backgroundColor: window.chartColors.orange,
                borderColor: window.chartColors.orange,
                data: data6,
              },
              {
                label: "Nova Scotia",
                fill: false,
                backgroundColor: window.chartColors.grey,
                borderColor: window.chartColors.grey,
                data: data7,
              },
              {
                label: "Nunavut",
                fill: false,
                backgroundColor: window.chartColors.blue,
                borderColor: window.chartColors.blue,
                data: data8,
              },
              {
                label: "Ontario",
                fill: false,
                backgroundColor: window.chartColors.orange,
                borderColor: window.chartColors.orange,
                data: data9,
              },
              {
                label: "Prince Edward Island",
                fill: false,
                backgroundColor: window.chartColors.yellow,
                borderColor: window.chartColors.yellow,
                data: data10,
              },
              {
                label: "Quebec",
                fill: false,
                backgroundColor: window.chartColors.purple,
                borderColor: window.chartColors.purple,
                data: data11,
              },
              {
                label: "Yukon",
                fill: false,
                backgroundColor: window.chartColors.blue,
                borderColor: window.chartColors.blue,
                data: data12,
              },
            ],
          },
          options: {
            legend: {
                position: "bottom",
            },
            responsive: true,
            title: {
              display: true,
              text: "Canada Confirmed",
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
        var ctx = document.getElementById("canvasHere").getContext("2d");
        window.myLine = new Chart(ctx, config);
    
        var colorNames = Object.keys(window.chartColors);
        console.log("Canada Graphs is working")

      
    return (
      <div className="CanGraphs">
        <p>This is a Canada test!</p>
        <canvas id="canvasHere"></canvas>
      </div>
    )
    }
  
  
  export default CanadaGraph;
    