import React, { Component } from 'react';
import Fullpage from './Fullpage'
import data from "../data.json";
import { Link,} from 'react-scroll'

class Second extends Component {
  render() {
      return(
    <Fullpage className="fullpage second">
      
     <h3 >{data.section[0].title} </h3>
     <p>{data.section[0].items[0].content} </p>
     <Link activeClass="active" to="Third" spy={true} smooth={true} offset={30} duration={200} delay={1000}>
        
        <div className="down1">
        <img src={data.icons.down} style={{
          maxWidth:"30px"
        
          }}/>
    </div>
    </Link>
   
    </Fullpage>
    )
  }
}

export default Second;