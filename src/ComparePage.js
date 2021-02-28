import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CompareGraphs from './CompareGraphs';
import CompareTable from './CompareTable';
import axios from 'axios';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function ComparePage({countryList, casesCountries}) {

 let historyCountries;

  const [count, setCount] = useState(0);
  const [compareTableData, setcompareTableData] = useState([]);
  const [compareGraphsData, setcompareGraphsData] = useState([]);

  function handleChange (object, value) {
    if (value.length > 0){
    let XCountries = value[0].name;
    console.log(XCountries);
    if (value.length > 1){
    for (let i = 1; i < value.length; i++){
      XCountries = XCountries + "%2C" + value[i].name
    }}
    let countryURL = "https://disease.sh/v3/covid-19/historical/" + XCountries + "?lastdays=all";

    axios.all([axios.get(countryURL)]).then(
      axios.spread((req1) => {
        setcompareGraphsData(req1.data);
      })
    );}
    else {setcompareGraphsData([])}
    console.log(compareGraphsData);
    getComparisonData(value)
}

function getComparisonData(value){
  console.log(value);
  setcompareTableData([]);
  setcompareGraphsData([]);
  for (let i = 0; i < value.length; i++){
    for (let j = 0; j < casesCountries.length; j++){
      if (casesCountries[j].country == value[i].name){
        setcompareTableData(arr => [...arr,(casesCountries[j])]);  
      }
    }
  }
  setCount(value.length)
  
}
  return (
    <div className="container-fluid text-center">
    <div className="row">
      <div className="col-12">
        <h1 class="display-4" id="title-text">
          Compare
    </h1>
      </div>
    </div>
    <hr />
    <div className="row">
        <div style={{ marginTop: 20 }} className="col-10 offset-1 col-md-6 offset-md-3">
          
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={countryList}
      getOptionLabel={(option) => option.name}
      disableCloseOnSelect
      onChange= {handleChange}
      style={{ width: "100%" }}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Choose two or more countries" />
      )}
    />
    </div>
    </div>
    {compareGraphsData.length > 0?
    <div>
      <hr/>
    <CompareGraphs compareGraphsData = {compareGraphsData}/>
    <CompareTable 
    casesCountries = {compareTableData}/>
    </div>
    :null}
    </div>
  );
}