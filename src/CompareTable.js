import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MUIDataTable from 'mui-datatables';

export default function CompareTable({ casesCountries }) {

    var columns = [
        { name: 'country', label: 'Country' },
        {
            name: 'cases', label: 'Cases', options: {
                customBodyRender: value => value ? value.toLocaleString() : null
            }
        },
        {
            name: 'casesToday', label: 'Cases Today', options: {
                customBodyRender: value => value ? value.toLocaleString() : null
            }
        },
        {
            name: 'casesPerOneMillion', label: 'Cases Per One Million', options: {
                customBodyRender: value => value ? value.toLocaleString() : null
            }
        },
        {
            name: 'activeCases', label: ' Active Cases', options: {
                customBodyRender: value => value ? value.toLocaleString() : null
            }
        },
        {
            name: 'critical', label: 'Critical', options: {
                customBodyRender: value => value ? value.toLocaleString() : null
            }
        },
        {
            name: 'recovered', label: 'Recovered', options: {
                customBodyRender: value => value ? value.toLocaleString() : null
            }
        },
        {
            name: 'deaths', label: 'Deaths', options: {
                customBodyRender: value => value ? value.toLocaleString() : null
            }
        },
        {
            name: 'deathsToday', label: 'Deaths Today', options: {
                customBodyRender: value => value ? value.toLocaleString() : null
            }
        },
        {
            name: 'deathsPerOneMillion', label: 'Deaths Per One Million', options: {
                customBodyRender: value => value ? value.toLocaleString() : null
            }
        },
        {
            name: 'tests', label: 'Tests', options: {
                customBodyRender: value => value ? value.toLocaleString() : null
            }
        },
        {
            name: 'testsPerOneMillion', label: 'Tests Per One Million', options: {
                customBodyRender: value => value ? value.toLocaleString() : null
            }
        },
        {
            name: 'population', label: 'Population', options: {
                customBodyRender: value => value ? value.toLocaleString() : null
            }
        },
    ];

    const options = {
        filterType: 'checkbox',
    };
    var data;
    function getData() {
        data = [];
        for (let i = 0; i < casesCountries.length; i++) {

            data.push({
                country: casesCountries[i]["country"],
                cases: casesCountries[i]["cases"],
                casesToday: casesCountries[i]["todayCases"],
                casesPerOneMillion: casesCountries[i]["casesPerOneMillion"],
                activeCases: casesCountries[i]["active"],
                critical: casesCountries[i]["critical"],
                recovered: casesCountries[i]["recovered"],
                deaths: casesCountries[i]["deaths"],
                deathsToday: casesCountries[i]["todayDeaths"],
                deathsPerOneMillion: casesCountries[i]["deathsPerOneMillion"],
                tests: casesCountries[i]["tests"],
                testsPerOneMillion: casesCountries[i]["testsPerOneMillion"],
                population: casesCountries[i]["population"]
            })
        }
    }

    getData()

    return (
        <div>
            <hr />

            <div style={{ zIndex: 0, position: "relative" }}>
                <MUIDataTable
                    title={"Covid-19 Data by Country"}
                    data={data}
                    columns={columns}
                    options={options} />

            </div>
            <hr />
        </div>
    );

}
