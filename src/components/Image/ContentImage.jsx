import React from "react";
import "./ContentImage.css";
import ImgPortada from "../../images/image-header-mobile.jpg";

export default function ContentImage() {
   return (
      <div className="Container-Card__img">
         <div className="ContentImg">
            <img src={ImgPortada} className="Gradient" alt="img" />
            <div className="Color" />
         </div>
      </div>
   );
}
