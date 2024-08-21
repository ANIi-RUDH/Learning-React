import React from "react";
import ReactDOM from "react-dom";

function Footer(){
  var data=new Date()
  var year=data.getFullYear()
 return <footer><p>Copyright © {year}</p></footer>
};

export default Footer;
