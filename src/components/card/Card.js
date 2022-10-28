import React from "react";
import { useNavigate } from "react-router-dom";
import css from "../../assets/img/logo_css.png";
import html from "../../assets/img/logo_html.png";
import brush from "../../assets/img/logo_brush.png";

const Card = ({ src, url, title }) => {
  const navigate = useNavigate();
  return (
    <>
    <div className="box">
      <img src={css} alt="" onClick={()=> navigate("/html")}/>
      <h3>CSS3 Styling</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
        augue, viverra sit amet ultricies
      </p>
    </div>
    <div className="box">
      <img src={html} alt="" onClick={()=> navigate("/css")}/>
      <h3>HTML5 Markup</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
        augue, viverra sit amet ultricies
      </p>
    </div>
    <div className="box">
      <img src={brush} alt="" onClick={()=> navigate("/logo")}/>
      <h3> Markup</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
        augue, viverra sit amet ultricies
      </p>
    </div>
  </>
  );
};

export default Card;
