import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CompareGraphs from './CompareGraphs';
import CompareTable from './CompareTable'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function ComparePage({countryList}) {

  const [count, setCount] = useState(0);


  function handleChange (object, value) {
    setCount(value.length)
    if (value.length > 0){
    console.log(value[value.length-1].name+" was just clicked");
}}

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
        <TextField {...params} variant="outlined" label="Choose countries to compare" />
      )}
    />
    </div>
    </div>
    {count>0?
    <div>
    <CompareGraphs/>
    <CompareTable/>
    </div>
    :null}
    </div>
  );
}