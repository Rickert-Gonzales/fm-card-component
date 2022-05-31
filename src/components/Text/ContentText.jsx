import React from "react";
import Points from "../Points/Points";
import "./ContentText.css";

export default function ContentText() {
   return (
      <div className="Container-Card__text">
         <div className="Parrafo-content">
            <h2>
               Get <span>insights </span>that help your business grow.
            </h2>
            <p>
               Discover the benefits of data analytics and make better decisions regarding revenue,
               customer experience, and overall efficiency.
            </p>
         </div>
         <div>
            <Points />
         </div>
      </div>
   );
}
