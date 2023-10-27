import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "bootstrap/dist/css/bootstrap.min.css";
import Chart from "chart.js";
import React, { useEffect } from "react";
import "./utils";

export default function CompareGraphs({ compareGraphsData }) {
    console.log(compareGraphsData);
    useEffect(() => {
        compareCountryData();
        // return () => console.log("cleanup");
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
    let compareCasesData = [];
    let compareDeathsData = [];
    let date = [];

    function compareCharts(data, title, canvasid, yaxis) {
        var config = {
            type: "line",
            data: {
                labels: date,
                datasets: data,
            },
            options: {
                aspectRatio: 1.7,
                legend: {
                    labels: {
                        usePointStyle: true
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

    function compareCountryData() {
            date = Object.keys(compareGraphsData[0].timeline.cases)
            for (let i = 0; i < compareGraphsData.length; i++) {
                compareCasesData.push({
                    label: compareGraphsData[i].country,
                    backgroundColor: colourThemeArray[i],
                    borderColor: colourThemeArray[i],
                    data: Object.values(compareGraphsData[i].timeline.cases),
                    fill: false,
                });
                compareDeathsData.push({
                    label: compareGraphsData[i].country,
                    backgroundColor: colourThemeArray[i],
                    borderColor: colourThemeArray[i],
                    data: Object.values(compareGraphsData[i].timeline.deaths),
                    fill: false,
                });
            }
            compareCharts(compareCasesData, "Cases", "canvasCompareCases", "linear");
            compareCharts(compareCasesData, "Cases (Log)", "canvasCompareCasesLog", "logarithmic");
            compareCharts(compareDeathsData, "Deaths", "canvasCompareDeaths", "linear");
            compareCharts(compareDeathsData, "Deaths (Log)", "canvasCompareDeathsLog", "logarithmic");
    }


    return (
        <div>
            {compareGraphsData.length > 0 ? (
                <div>
                    <div className="row">
                        <div className="col-xs-12 col-lg-6">
                            <Card style={{ marginBottom: "10px" }}>
                                <CardContent>
                                    <canvas id="canvasCompareCases"></canvas>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="col-xs-12 col-lg-6">
                            <Card style={{ marginBottom: "10px" }}>
                                <CardContent>
                                    <canvas id="canvasCompareCasesLog"></canvas>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-10 offset-xs-1 col-lg-6">
                            <Card style={{ marginBottom: "10px" }}>
                                <CardContent>
                                    <canvas id="canvasCompareDeaths"></canvas>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="col-xs-10 offset-xs-1 col-lg-6">
                            <Card style={{ marginBottom: "10px" }}>
                                <CardContent>
                                    <canvas id="canvasCompareDeathsLog"></canvas>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}   
