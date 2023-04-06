import React from "react";
import Home from "./Home";

const Header = (props) => {
    console.log(props)
  return(
    <div>
    <h1>Hello {props.name} - {props.last}</h1>
    {props.children}
    <Home name="Jimmy"/>
    <Home name="Anil"/>
    </div>
  )
};

export default Header;
