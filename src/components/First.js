import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import { Link, Element } from 'react-scroll';
import Fullpage from './Fullpage';
import data from "../data.json";

class First extends Component {
  render() {
      return(
    <Fullpage className="fullpage first">
      
    <h1 className="title"> {data.title}</h1>
    <div> <h2>{data.subtitle}</h2></div>
    <div className="icons-wrapper">
     {
       Object.keys(data.links).map(key =>{
         return(
             <div className="icon">
           <SocialIcon url={data.links[key]} />
           </div>
         );
       })
     }
     </div>
     <Link activeClass="active" to="Second" spy={true} smooth={true} offset={180} duration={200} delay={1000}>
     <div className="down">
     <img src={data.icons.down} style={{
       maxWidth: "30px"
     }}/>
     </div>
     </Link>
     <Element name="Second" className="element">
          
          </Element>
    </Fullpage>
    
    )
  }
}


export default First;