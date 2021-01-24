import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import "bootstrap/dist/css/bootstrap.min.css";


const useStyles = makeStyles({
  root: {
    // maxWidth: 800,
    marginBottom: "10px"},
  media: {
    height: 5,
  },
});


let labelContinents = [];
let casesContinents = [];
let casesPerCapContinents = [];
let deathsContinents = [];
let deathsPerCapContinents = [];
let fatalityRateContinents = [];
let continentCards = [];

let cardColor= [
  '#B21F00',
  '#C9DE00',
  '#2FDE00',
  '#00A6B4',
  '#6800B4',
  'orange'
]

class ContinentCards extends React.Component {
 


  testRun() {

    for (let i = 0; i < (this.props.casesContinents).length; i++) {
      labelContinents.push(this.props.casesContinents[i]["continent"]);
      casesContinents.push(this.props.casesContinents[i]["cases"]);
      deathsContinents.push(this.props.casesContinents[i]["deaths"]);
      casesPerCapContinents.push(this.props.casesContinents[i]["casesPerOneMillion"]);
      deathsPerCapContinents.push(this.props.casesContinents[i]["deathsPerOneMillion"]);
      fatalityRateContinents.push((this.props.casesContinents[i]["deaths"])/(this.props.casesContinents[i]["cases"]));
      this.createCards();
      this.forceUpdate();
    }
  }

  componentDidMount() {

    this.testRun();
  };

  createCards() {
    const { classes } = this.props;
    for (let i = 0; i < labelContinents.length; i++) {
      continentCards[i] = (
        <div className = "col-xs-8 offset-xs-2 col-sm-6 col-lg-3">
    <Card className={classes.root} style = {{marginBottom: 10, borderTop: cardColor[i] + " 5px solid"}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = './Coronavirus_3D_illustration_by_CDC_1600x900.png'
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {labelContinents[i]}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {casesContinents[i].toLocaleString()} cases
          </Typography>
          <Typography variant="body1" component="p" style={{color: "red"}}>
          {deathsContinents[i].toLocaleString()} deaths
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p" style={{marginTop: 5}}>
            {(fatalityRateContinents[i].toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}))} Fatality Rate
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

      )
    }
    this.forceUpdate();
  }

  render() {

    if (labelContinents.length == 0) {
      return (
        <div class="text-center">
          <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
            <span className="visually-hidden"></span>
          </div>
          <h3 id="loading-text">Loading...</h3>
        </div>
      )
    }
    for (let i = 0; i < labelContinents.length; i++) {
      return (
        <div> 
          <h1 class="display-4 text-center" id = "continent-text" style = {{fontSize: "3rem", margin: 25}}>Covid-19 by Continent</h1>
          <hr/>
        <div className = "row">
          {continentCards} 
    </div>
    <hr/>
    </div>

      )
    }}}
    export default withStyles(useStyles)(ContinentCards);