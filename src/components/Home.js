import React from 'react';
import { Icon } from 'semantic-ui-react'

class Home extends React.Component {

  render(){
    return(
      <div className="container homeDiv">
        <h1 className="fadeIn1">TaliScheer</h1>
        <p className="tagline">
          <span className="fadeIn2">Developer</span>
          <span className="fadeIn2">•</span>
          <span className="fadeIn3">Designer</span>
          <span className="fadeIn4">•</span>
          <span className="fadeIn4">Creator</span>
        </p>
        <a href='#about'><Icon className="downArrow pulsate" name="chevron down" size='large'/></a>
      </div>
    )
  }
}

export default Home
