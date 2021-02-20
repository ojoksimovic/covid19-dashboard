import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadSideMask } from '@fortawesome/free-solid-svg-icons/';


export default function Compare() {

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
          <p>more to come...</p>
          <FontAwesomeIcon style = {{marginTop: 50}}size = "10x" color = "lightGray" icon={faHeadSideMask}/>
          </div>
          )
    }