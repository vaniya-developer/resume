import React, { Component } from 'react';
import Fullpage from './Fullpage'
import { Link, Element } from 'react-scroll'
import data from "../data.json";
import './Third.css';
class Third extends Component {
  render() {
      return(
    <Fullpage className="fullpage third">
     
      <h3 className="h3a">{data.section[1].title}</h3>
      <div className="cards-wrapper">
      {data.section[1].items.map(skill =>{
          return(
            <div className="card">
            <div className="image-wrapper">
            <div className="image1">
            <img  src={skill.content.image}/>
            </div>
            </div>
            <div className="skill-title-wrapper">
            <h4>{skill.content.title}</h4>
            <Element name="Third" className="element1">
             
             </Element>
            </div>
            </div>
          );
        }) }
        </div>
    </Fullpage>
    )
  }
}

export default Third;