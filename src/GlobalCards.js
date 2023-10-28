import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';

const useStyles = makeStyles({
  root: {
    // maxWidth: 800,
    marginBottom: "10px"},
  media: {
    height: 0,
  },
});
export default function MediaCard({data}) {
  const classes = useStyles();

  return (
    <div>
      <div className = "row">
      <div className = "col-xs-8 offset-xs-2 col-sm-6 col-lg-3">
    <Card className={classes.root} style = {{borderTop: "rgb(54, 162, 235) 5px solid"}}>
        <CardMedia
          className={classes.media}
          image = './Coronavirus_3D_illustration_by_CDC_1600x900.png'
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Total Confirmed Cases
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" style={{display: "inline"}}>
            {data.cases.toLocaleString()}
          </Typography>
          <Typography variant="body1" component="p" color= "secondary" style={{display: "inline", marginLeft: 10}}>
          +{data.todayCases.toLocaleString()}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p" style={{marginTop: 5}}>
            {((data.cases)/(data.population)).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2})} of Global Population
          </Typography>
        </CardContent>
    </Card>
    </div>

    <div className = "col-xs-8 offset-xs-2 col-sm-6 col-lg-3">
    <Card className={classes.root} style = {{borderTop: "rgb(255, 205, 86) 5px solid"}}>
        <CardMedia
          className={classes.media}
          image = './Coronavirus_3D_illustration_by_CDC_1600x900.png'
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Total Active Cases
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" style={{display: "inline"}}>
            {data.active.toLocaleString()}
          </Typography>
          <Typography variant="body1" component="p" style={{color: ((data.todayCases - data.todayRecovered)<0?"green":"red"), display: "inline", marginLeft: 10}}>
          {(data.todayCases - data.todayRecovered)<0?"":"+"}{(data.todayCases - data.todayRecovered).toLocaleString()}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p" style={{marginTop: 5}}>
            {(data.critical.toLocaleString())} Remain in Critical Condition
          </Typography>
        </CardContent>
    </Card>
    </div>

    <div className = "col-xs-8 offset-xs-2 col-sm-6 col-lg-3">
    <Card className={classes.root} style = {{borderTop: "rgb(75, 192, 192) 5px solid"}}>
        <CardMedia
          className={classes.media}
          image = './Coronavirus_3D_illustration_by_CDC_1600x900.png'
          title="Covid-19"
        />
        <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
            Total Recovered
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" style={{display: "inline"}}>
            {data.recovered.toLocaleString()}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p" style={{color: "green", display: "inline", marginLeft: 10}}>
          +{data.todayRecovered.toLocaleString()}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p" style={{marginTop: 5}}>
            {((data.recovered)/(data.cases)).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2})} of Confirmed Cases
          </Typography>
        </CardContent>
    </Card>
    </div>
    <div className = "col-xs-8 offset-xs-2 col-sm-6 col-lg-3">
    <Card className={classes.root} style = {{borderTop: "rgb(255, 99, 132) 5px solid"}}>
        <CardMedia
          className={classes.media}
          image = './Coronavirus_3D_illustration_by_CDC_1600x900.png'
          title="Contemplative Reptile"
        />
        <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
            Total Deaths
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" style={{display: "inline"}}>
            {data.deaths.toLocaleString()}
          </Typography>
          <Typography variant="body1" component="p" color="secondary" style={{display: "inline", marginLeft: 10}}>
          +{data.todayDeaths.toLocaleString()}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p" style={{marginTop: 5}}>
            {((data.deaths)/(data.cases)).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2})} of Confirmed Cases
          </Typography>
        </CardContent>
    </Card>
    </div>
    </div>
    </div>
  
  );
}
