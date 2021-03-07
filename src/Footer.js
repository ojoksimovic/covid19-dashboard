import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer({cases}){
    return(
<div className="row">
<div className="col-12 text-center">
    <hr/>
  <p style={{ textAlign: "center", fontSize: "1rem" }}>
    Last Updated: {new Date(cases["updated"]).toString()}
  </p>
</div>

<div className="col-12 text-center">
  <hr />
  <p id="olivera" style={{ textAlign: "center", fontSize: "1rem" }}>
    developed by <a href="https://www.olivera.tech">olivera.tech</a>
  </p>
</div>
</div>
)}

export default Footer;