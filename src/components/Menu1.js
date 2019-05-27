import React, { Component } from 'react';
import data from "../data.json";
import { Link, Element } from 'react-scroll';
import Matrix from './Matrix';

//<Matrix/>
class Menu1 extends Component {
    render() {
      return (
        <div className="menu">
      <div className="theme1">
      <img onclick="myFunction()"
      src={data.icons.theme}
      style={{maxWidth:"70px"}} onclick=""/>
      <Matrix/>
      </div>
          
      <Link activeClass="active" to="Third" spy={true} smooth={true} offset={30} duration={200} delay={1000}>
      <div className="skill1">
      <img src={data.icons.skill}style={{maxHeight:"70px"}}/>
      </div>
      </Link>
      <Link activeClass="active" to="Second" spy={true} smooth={true} offset={182} duration={200} delay={1000}>
      <div className="about1">
      <img src={data.icons.about}style={{maxWidth:"100px"}}/>
      </div>
      </Link>
      
      </div>
      );
      };
    };
    function myFunction() {
      
    }
  export default Menu1;
