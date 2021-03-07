import "./index.css";
import React from "react";
import "./utils";
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import GlobalGraphs from './GlobalGraphs';
import CountryPage from "./CountryPage";
import SearchPage from "./SearchPage";
import ComparePage from "./ComparePage";

let countryRouter = [];

class DataFetch extends React.Component {
    constructor(props) {
        super(props);
        this.CountryName = this.CountryName.bind(this);
        this.CountryList = this.CountryList.bind(this);
        this.ComparePageList = this.ComparePageList.bind(this);
        this.state = {
            historyGlobal: null,
            historyCountries: null,
            cases: null,
            casesContinents: null,
            casesCountries: null,
            vaccineGlobal: null,
            vaccineCountries: null
        };
    }

    componentDidMount() {
        axios.all([
            axios.get('https://disease.sh/v3/covid-19/all?yesterday=false'),
            axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all'),
            axios.get('https://disease.sh/v3/covid-19/historical?lastdays=all'),
            axios.get('https://disease.sh/v3/covid-19/continents?yesterday=false&twoDaysAgo=false&allowNull=true'),
            axios.get('https://disease.sh/v3/covid-19/countries?yesterday=false&twoDaysAgo=false&sort=cases&allowNull=true'),
            axios.get('https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=all'),
            axios.get('https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=all')
        ])
            .then(axios.spread((req1, req2, req3, req4, req5, req6, req7) => {
                this.setState({
                    cases: req1.data,
                    historyGlobal: req2.data,
                    historyCountries: req3.data,
                    casesContinents: req4.data,
                    casesCountries: req5.data,
                    vaccineGlobal: req6.data,
                    vaccineCountries: req7.data
                });
            }));
    }

  capitalizeFirstLetter(mySentence){
    const words = mySentence.split("%20");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    let newName = words.join(" ");
    return newName
}
    
CountryName(props) {
    let XStats;
    let XCountry = this.capitalizeFirstLetter(props.match.params.countryname);
    for (let i = 0; i < this.state.casesCountries.length; i++) {
        if (this.state.casesCountries[i]["country"].toLowerCase() == props.match.params.countryname.toLowerCase()) {
          XStats = this.state.casesCountries[i]
        }
      }
    let XProvinceHistory =[];
    for (let i = 0; i < this.state.historyCountries.length; i++){
        if (this.state.historyCountries[i]["country"].toLowerCase() == [props.match.params.countryname.toLowerCase()] && this.state.historyCountries[i]["province"] != null) {
            XProvinceHistory.push(this.state.historyCountries[i])
        }
    }
    return <CountryPage
    XStats = {XStats}
    XProvinceHistory = {XProvinceHistory}
    XCountry = {XCountry}
    XVaccineCountries = {this.state.vaccineCountries}
    cases={this.state.cases}
    />
  }
  CountryList(){
      console.log(this.state.casesCountries)
      let countryList = [];
    for (let i = 0; i < this.state.casesCountries.length; i++) {
        countryList.push(
            { flag: this.state.casesCountries[i].countryInfo.flag,
                name:this.state.casesCountries[i].country
    })}
    console.log(countryList);
    return <SearchPage
    countryList = {countryList}
    cases={this.state.cases}
    />
  }

  ComparePageList(){
    console.log(this.state.historyCountries)
    let countryList = [];
  for (let i = 0; i < this.state.casesCountries.length; i++) {
      countryList.push(
          { flag: this.state.casesCountries[i].countryInfo.flag,
              name:this.state.casesCountries[i].country
  })}

  
  return <ComparePage
  countryList = {countryList}
  casesCountries = {this.state.casesCountries}
  historyCountries = {this.state.historyCountries}
  vaccineCountries = {this.state.vaccineCountries}
  cases={this.state.cases}
  />
}

    render() {

        if (this.state.cases == null || this.state.historyCountries == null || this.state.casesContinents == null) {
            return (
                <div class="text-center">

                    <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
                        <span className="visually-hidden"></span>
                    </div>
                    <h3 id="loading-text">Loading...</h3>
                </div>
            )
        }
        return (
            <div>
            <Router>
                <Switch>
                    <Route exact path="/"><Redirect to="/global" /></Route>
                    <Route path="/country/:countryname" component={this.CountryName} />
                    <Route
                        path="/global"
                        render={() =>
                            <GlobalGraphs
                                casesCountries={this.state.casesCountries}
                                cases={this.state.cases}
                                casesContinents={this.state.casesContinents}
                                historyGlobal={this.state.historyGlobal}
                                historyCountries={this.state.historyCountries}
                                vaccineGlobal={this.state.vaccineGlobal}
                                vaccineCountries = {this.state.vaccineCountries}
                            />} />
              <Route path="/search" component={this.CountryList} />
              <Route path="/compare" component={this.ComparePageList} />

                </Switch>
            </Router>

            </div>

        );
    }
}

export default DataFetch;