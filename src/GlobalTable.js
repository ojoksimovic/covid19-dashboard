import * as React from 'react';
import MUIDataTable from 'mui-datatables';
import "bootstrap/dist/css/bootstrap.min.css";

export default class GlobalTable extends React.Component {

    render() {
        var columns = [
            { name: 'country', label: 'Country'},
            { name: 'cases', label: 'Cases', options: {
                customBodyRender: value => value?value.toLocaleString():null}},
            { name: 'casesPerOneMillion', label: 'Cases Per One Million', options: {
                customBodyRender: value => value?value.toLocaleString():null}},
            { name: 'activeCases', label: ' Active Cases', options: {
                customBodyRender: value => value?value.toLocaleString():null}},
            { name: 'critical', label: 'Critical', options: {
                customBodyRender: value => value?value.toLocaleString():null}},
            { name: 'recovered', label: 'Recovered', options: {
                customBodyRender: value => value?value.toLocaleString():null}},
            { name: 'deaths', label: 'Deaths', options: {
                customBodyRender: value => value?value.toLocaleString():null}},
            { name: 'deathsPerOneMillion', label: 'Deaths Per One Million', options: {
                customBodyRender: value => value?value.toLocaleString():null}},
            { name: 'tests', label: 'Tests', options: {
                customBodyRender: value => value?value.toLocaleString():null}},
            { name: 'testsPerOneMillion', label: 'Tests Per One Million', options: {
                customBodyRender: value => value?value.toLocaleString():null}},
            { name: 'population', label: 'Population', options: {
                customBodyRender: value => value?value.toLocaleString():null}},
        ];
        
        const options = {
            filterType: 'checkbox',
          };
        var data = [];

            for (let i = 0; i < this.props.casesCountries.length; i++) {
                data.push({
                    country: this.props.casesCountries[i]["country"],
                    cases: this.props.casesCountries[i]["cases"],
                    casesPerOneMillion: this.props.casesCountries[i]["casesPerOneMillion"],
                    activeCases: this.props.casesCountries[i]["active"],
                    critical: this.props.casesCountries[i]["critical"],
                    recovered: this.props.casesCountries[i]["recovered"],
                    deaths: this.props.casesCountries[i]["deaths"],
                    deathsPerOneMillion: this.props.casesCountries[i]["deathsPerOneMillion"],
                    tests: this.props.casesCountries[i]["tests"],
                    testsPerOneMillion: this.props.casesCountries[i]["testsPerOneMillion"],
                    population: this.props.casesCountries[i]["population"]
                })
            } 

        return (
            <div>
                <h1 class="display-4 text-center" id="continent-text" style={{ fontSize: "3rem", margin: 25 }}>Covid-19 by Country</h1>
                <hr/>

                <div>
                    <MUIDataTable 
                    title= {"Covid-19 Data by Country"} 
                    data={data}
                    columns={columns} 
                    options={options} />
                </div>
                <hr/>
            </div>
        );
    }
}
