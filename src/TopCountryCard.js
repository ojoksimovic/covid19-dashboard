import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    // maxWidth: 800,
    marginBottom: "10px",
  },
  media: {
    height: 5,
  },
});

let labelCountry = [];
let casesCountry = [];
let todayCases = [];
let casesPercentagePop = [];
let percentWorldCases = [];
let fatalityRateCountry = [];
let countryCards = [];

class TopCountryCard extends React.Component {
  testRun() {
    for (let i = 0; i < 4; i++) {
      labelCountry.push(this.props.casesCountries[i]["country"]);
      casesCountry.push(this.props.casesCountries[i]["cases"]);
      casesPercentagePop.push(
        this.props.casesCountries[i]["cases"] /
          this.props.casesCountries[i]["population"]
      );
      todayCases.push(this.props.casesCountries[i]["todayCases"]);
      percentWorldCases.push(
        this.props.casesCountries[i]["cases"] / this.props.cases["cases"]
      );
      fatalityRateCountry.push(
        this.props.casesCountries[i]["deaths"] /
          this.props.casesCountries[i]["cases"]
      );
      this.createCards();
      this.forceUpdate();
    }
  }

  componentDidMount() {
    if (labelCountry.length == 0) {
      this.testRun();
    }
  }

  createCards() {
    const { classes } = this.props;
    for (let i = 0; i < labelCountry.length; i++) {
      countryCards[i] = (
        <div className="col-xs-8 offset-xs-2 col-sm-6 col-lg-3">
          <Card
            className={classes.root}
            style={{
              marginBottom: 10,
              borderTop: "rgb(255, 99, 132) 5px solid",
            }}
          >
            <CardActionArea>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={"/country/" + labelCountry[i]}
              >
                <CardMedia className={classes.media} />

                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    {labelCountry[i]}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    style={{ display: "inline", marginBottom: 0 }}
                  >
                    {casesCountry[i].toLocaleString()} cases
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    color="textSecondary"
                    style={{
                      display: "inline",
                      marginTop: 0,
                      marginLeft: 5,
                      fontSize: "0.8rem",
                    }}
                  >
                    {todayCases[i] ? "+" : null}
                    {todayCases[i] ? todayCases[i].toLocaleString() : null}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h3"
                    style={{
                      fontWeight: "bold",
                      marginBottom: 5,
                      fontSize: "1rem",
                    }}
                  >
                    {percentWorldCases[i].toLocaleString(undefined, {
                      style: "percent",
                      minimumFractionDigits: 2,
                    })}{" "}
                    of total world cases
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    color="textSecondary"
                    style={{ marginTop: 0, fontSize: "0.8rem" }}
                  >
                    {casesPercentagePop[i].toLocaleString(undefined, {
                      style: "percent",
                      minimumFractionDigits: 2,
                    })}{" "}
                    of country infected
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    color="textSecondary"
                    style={{ marginTop: 0, fontSize: "0.8rem" }}
                  >
                    {fatalityRateCountry[i].toLocaleString(undefined, {
                      style: "percent",
                      minimumFractionDigits: 2,
                    })}{" "}
                    fatality rate
                  </Typography>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        </div>
      );
    }
    this.forceUpdate();
  }

  render() {
    if (labelCountry.length == 0) {
      return (
        <div class="text-center">
          <div
            className="spinner-border"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden"></span>
          </div>
          <h3 id="loading-text">Loading...this may take up to 60 seconds...</h3>
        </div>
      );
    }
    for (let i = 0; i < labelCountry.length; i++) {
      return (
        <div>
          <h1
            class="display-4 text-center"
            id="country-text"
            style={{ fontSize: "3rem", margin: 25 }}
          >
            Most Affected Countries
          </h1>
          <hr />
          <div className="row">{countryCards}</div>
          <hr />
        </div>
      );
    }
  }
}
export default withStyles(useStyles)(TopCountryCard);
