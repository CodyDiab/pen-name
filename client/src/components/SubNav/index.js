import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function SubNav() {

    return(
        <ul className="flex-row">
          <li className="mx-1">
            View All
          </li>
          <li className="mx-1">
           View Following
          </li>
        </ul>
    )
}

export default SubNav;