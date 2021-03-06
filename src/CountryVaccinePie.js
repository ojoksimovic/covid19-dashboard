import "./index.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Chart from "chart.js";
import { Pie} from 'react-chartjs-2';
import "./utils";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


 function CountryVaccinePie({XVaccineStats, XStats}) {
console.log(XVaccineStats);
    if (XVaccineStats == null){
        return (
            <div class="text-center">

                <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
                    <span className="visually-hidden"></span>
                </div>
                <h3 id="loading-text">Loading...</h3>
            </div>
        )
    }
      let labelVaccine = ["Vaccinated", "Not Vaccinated"];
      var vac = Object.values(XVaccineStats).sort()
      let totalVaccinated = (vac[vac.length-1]);
      let totalUnVaccinated = (XStats.population - totalVaccinated);
      let arrayVaccinated = [totalVaccinated, totalUnVaccinated];
      let percentVaccinated = (totalVaccinated/XStats.population).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2})

      return (
        <div className="col-xs-10 offset-xs-1 col-lg-6">
  
          <Card style = {{marginBottom: "10px"}}><CardContent>
          <Pie
            data={{
              labels: labelVaccine,
              datasets: [
                {
                  label: 'Vaccinated',
                  backgroundColor: [
                      'rgb(54, 162, 235)',
                      'rgb(255, 99, 132)'
                  ],
                  hoverBackgroundColor: [
                    'rgb(54, 162, 235)',
                    'rgb(255, 99, 132)'
                  ],
                  data: arrayVaccinated
                }
              ]
            }}
            options={{
              title: {
                display: true,
                text: percentVaccinated + " of Population Vaccinated",
                fontSize: 20
              },
              legend: {
                labels: {
                  usePointStyle: true
              },
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
      )
            }
            export default CountryVaccinePie