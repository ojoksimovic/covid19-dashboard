import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import "./utils";
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import GlobalGraphs from './GlobalGraphs';
import ContinentCards from './ContinentCards';
import CountryPage from "./CountryPage";

let countryRouter = [];

class DataFetch extends React.Component {
    constructor(props) {
        super(props);
        this.User = this.User.bind(this);
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
            }));
    }


User(props) {
    let XStats;
    for (let i = 0; i < this.state.casesCountries.length; i++) {
        if (this.state.casesCountries[i]["country"] == props.match.params.username) {
          XStats = this.state.casesCountries[i]
        }
      }
      console.log(XStats)
    return <CountryPage
    XStats = {XStats}
    XCountry = {props.match.params.username}
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
                    <Route path="/country/:username" component={this.User} />
                    <Route
                        path="/global"
                        render={() =>
                            <GlobalGraphs
                                casesCountries={this.state.casesCountries}
                                cases={this.state.cases}
                                casesContinents={this.state.casesContinents}
                                historyGlobal={this.state.historyGlobal}
                                historyCountries={this.state.historyCountries}
                            />} />
                    <Route 
                    path="/country/Canada"
                    render={ () =>
                    <CountryPage
                    casesCountries = {this.state.casesCountries}
                    XCountry = "Canada"
                    />} />
                    <Route 
                    path="/country/USA"
                    render={ () =>
                    <CountryPage
                    casesCountries = {this.state.casesCountries}
                    XCountry = "USA"
                    />} />               
                    {/* <Route path="/compare" component={ContinentCards} />
              <Route path="/search" component={ContinentCards} />  */}
                </Switch>
            </Router>

            </div>

        );
    }
}

export default DataFetch;