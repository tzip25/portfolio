import React from 'react';
import { Icon } from 'semantic-ui-react'

class Aabout extends React.Component {
  render(){
    return(
      <div className="aboutDiv">
        <img className="aboutAvatar" src={"tali-large.png"} alt="tali scheer avatar"/>
        <h1>A Bit About Me</h1>

        <div className="textWidth">
        <p className="locationText">Denver → Israel → Florida → New York</p>
          <p>
          Hey there! My name is Tali. I'm a software engineer with experience in Golang, Javascript, 
          React, Redux, Ruby, Rails, HTML, CSS... and always learning more. I am also skilled in Photoshop and 
          Illustrator. For the past 11+ years, I worked towards building the Baby K’tan
          brand from an idea born in my sister's kitchen, to a globally recognized
          baby products company. 
          </p>
          <p>
          Reach out and learn more!
          </p>
          <p>
          <a href="mailto:tali.scheer@gmail.com?Subject=Saw%20your%20portfolio%20and%20thought%20it%20was%20great!%20">
            <Icon link name='mail' size="large"
          />
          </a>
            <a href="https://github.com/tzip25" target="_blank" rel="noopener noreferrer">
              <Icon link name='github' size="large" />
            </a>
            <a href="https://www.linkedin.com/in/tali-scheer/" target="_blank" rel="noopener noreferrer">
              <Icon link name='linkedin' size="large"
            />
            </a>
            <a href="https://medium.com/@tali.scheer" target="_blank" rel="noopener noreferrer">
              <Icon link name='medium m' size="large"
            />
            </a>
            <a href="https://twitter.com/talischeer" target="_blank" rel="noopener noreferrer">
              <Icon link name='twitter' size="large"
            />
            </a>
          </p>
        </div>
      </div>
    )
  }
}

export default Aabout
