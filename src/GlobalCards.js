import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import "bootstrap/dist/css/bootstrap.min.css";

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
    <Card className={classes.root} style = {{borderTop: "#00A6B4 5px solid"}}>
      <CardActionArea>
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
          <Typography variant="body1" component="p" style={{color: "red", display: "inline", marginLeft: 10}}>
          +{data.todayCases.toLocaleString()}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p" style={{marginTop: 5}}>
            {((data.cases)/(data.population)).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2})} of Global Population
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    <div className = "col-xs-8 offset-xs-2 col-sm-6 col-lg-3">
    <Card className={classes.root} style = {{borderTop: "#C9DE00 5px solid"}}>
      <CardActionArea>
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
      </CardActionArea>
    </Card>
    </div>

    <div className = "col-xs-8 offset-xs-2 col-sm-6 col-lg-3">
    <Card className={classes.root} style = {{borderTop: "#2FDE00 5px solid"}}>
      <CardActionArea>
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
      </CardActionArea>
    </Card>
    </div>
    <div className = "col-xs-8 offset-xs-2 col-sm-6 col-lg-3">
    <Card className={classes.root} style = {{borderTop: "#B21F00 5px solid"}}>
      <CardActionArea>
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
          <Typography variant="body1" component="p" style={{color: "red", display: "inline", marginLeft: 10}}>
          +{data.todayDeaths.toLocaleString()}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p" style={{marginTop: 5}}>
            {((data.deaths)/(data.cases)).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2})} of Confirmed Cases
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
    </div>
  
  );
}
