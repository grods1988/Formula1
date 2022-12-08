import React from "react";
import { Link } from "react-router-dom";

function Errorpage() {
  return (
    <div className="container text-center display-1">
      <div class="alert alert-danger p-5 " role="alert">
        This Page doesnt Exist
      </div>
      <Link to="/" className="btn btn-primary">
        Back home
      </Link>
    </div>
  );
}

export default Errorpage;
