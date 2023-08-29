import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect, useHistory } from 'react-router-dom';
import Footer from './Footer';
import ROUTE from "./route";



const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      fontSize: 18,
    },
  },
});
function countryLink(country){
  const words = country.split(" ");
  for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  let countryLink = words.join("%20");
  return countryLink
}


export default function CountrySelect({countryList, cases}) {
  const classes = useStyles();
  const history = useHistory();

  function handleChange (object, value) {
    history.push(ROUTE.COUNTRY_BASE + '/'+ countryLink(value.name))
    }

  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-12">
          <h1 class="display-4" id="title-text">
            Search
      </h1>

        </div>
      </div>
      <hr />
      <div className="row">
        <div style={{ marginTop: 20 }} className="col-10 offset-1 col-md-6 offset-md-3">
          
          <Autocomplete
            onChange= {handleChange}
            id="combo-box-demo"
            options={countryList}
            getOptionLabel={(option) => option.name}
            style={{ width: "100%" }}
            renderInput={(params) => <TextField {...params} label="Choose a country" variant="outlined" />}
          />

        </div>
      </div>
      <Footer cases = {cases}/>
    </div>

  );
}