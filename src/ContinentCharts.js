import "./index.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Chart from "chart.js";
import "./utils";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Pie} from 'react-chartjs-2';

export default class ContinentCharts extends React.Component {


  render() {

    let labelContinents = [];
    let casesContinents = [];
    let casesPerCapContinents = [];
    let deathsContinents = [];
    let deathsPerCapContinents = [];
    let fatalityRateContinents = [];

    for (let i = 0; i < (this.props.casesContinents).length; i++) {
      labelContinents.push(this.props.casesContinents[i]["continent"]);
      casesContinents.push(this.props.casesContinents[i]["cases"]);
      deathsContinents.push(this.props.casesContinents[i]["deaths"]);
      casesPerCapContinents.push(this.props.casesContinents[i]["casesPerOneMillion"]);
      deathsPerCapContinents.push(this.props.casesContinents[i]["deathsPerOneMillion"]);
      fatalityRateContinents.push((this.props.casesContinents[i]["deaths"])/(this.props.casesContinents[i]["cases"]));
    }


    return (
      <div>

      <div className="row">
        <div className="col-xs-12 col-md-6"> 
        <Card style = {{marginBottom: "10px"}}><CardContent>
        <Pie
          data={{
            labels: labelContinents,
            datasets: [
              {
                label: 'Rainfall',
                backgroundColor: [
                  '#B21F00',
                  '#C9DE00',
                  '#2FDE00',
                  '#00A6B4',
                  '#6800B4',
                  'orange'
                ],
                hoverBackgroundColor: [
                  '#501800',
                  '#4B5000',
                  '#175000',
                  '#003350',
                  '#35014F',
                  'orange'
                ],
                data: casesContinents
              }
            ]
          }}
          options={{
            title: {
              display: true,
              text: "Confirmed Cases",
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            },
            tooltips: {
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
          }
           }}
        />
        </CardContent></Card>
        </div>

        {/* <div className="col-xs-12 col-md-6"> 
        <Pie
          data={{
            labels: labelContinents,
            datasets: [
              {
                label: 'Rainfall',
                backgroundColor: [
                  '#B21F00',
                  '#C9DE00',
                  '#2FDE00',
                  '#00A6B4',
                  '#6800B4',
                  'orange'
                ],
                hoverBackgroundColor: [
                  '#501800',
                  '#4B5000',
                  '#175000',
                  '#003350',
                  '#35014F',
                  'orange'
                ],
                data: casesPerCapContinents
              }
            ]
          }}
          options={{
            title: {
              display: true,
              text: "Confirmed Cases Per Million",
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            },
            tooltips: {
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
          }
           }}
        />

        </div> */}
        {/* </div> */}
        
        {/* <div className = "row"> */}
        <div className="col-xs-12 col-md-6">
        <Card style = {{marginBottom: "10px"}}><CardContent>
          <Pie
            data={{
              labels: labelContinents,
              datasets: [
                {
                  label: 'Rainfall',
                  backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#6800B4',
                    'orange'
                  ],
                  hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F',
                    'orange'
                  ],
                  data: deathsContinents
                }
              ]
            }}
            options={{
              title: {
                display: true,
                text: 'Deaths',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
              },
              tooltips: {
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
            }
             }}
          />
        </CardContent></Card>
        </div>


        {/* <div className="col-xs-12 col-md-6">
          <Pie
            data={{
              labels: labelContinents,
              datasets: [
                {
                  label: 'Rainfall',
                  backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#6800B4',
                    'orange'
                  ],
                  hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F',
                    'orange'
                  ],
                  data: deathsPerCapContinents
                }
              ]
            }}
            options={{
              title: {
                display: true,
                text: 'Deaths Per Million',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
              },
              tooltips: {
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
            }
             }}
          />
        </div> */}
      </div>
{/* 
      <div className="row">

        <div className="col-xs-12 col-md-6"> 
        <Pie
          data={{
            labels: labelContinents,
            datasets: [
              {
                label: 'Rainfall',
                backgroundColor: [
                  '#B21F00',
                  '#C9DE00',
                  '#2FDE00',
                  '#00A6B4',
                  '#6800B4',
                  'orange'
                ],
                hoverBackgroundColor: [
                  '#501800',
                  '#4B5000',
                  '#175000',
                  '#003350',
                  '#35014F',
                  'orange'
                ],
                data: fatalityRateContinents
              }
            ]
          }}
          options={{
            title: {
              display: true,
              text: "Fatality Rate",
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            },
            tooltips: {
              callbacks: {
                label: function(tooltipItem, data) {
                  var dataLabel = data.labels[tooltipItem.index];
                  var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
        
                  if (Chart.helpers.isArray(dataLabel)) {
                    dataLabel = dataLabel.slice();
                    dataLabel[0] += value;
                  } else {
                    dataLabel += value;
                  }
                  return dataLabel;
                }
              }
          }
           }}
        />

        </div>
        </div> */}
        <hr/>
      </div>
    );
  }
}