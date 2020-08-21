import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function SubNav() {
   
    return(
      <div class="tabs is-centered">
      <ul>
        <li class="is-active"><a>View All</a></li>
        <li><a>View Following</a></li>
        </ul>
    </div>
    )
}

export default SubNav;