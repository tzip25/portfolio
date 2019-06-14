import React from 'react';
import { Icon } from 'semantic-ui-react'

class Aabout extends React.Component {
  render(){
    return(
      <div className="aboutDiv">
        <img className="aboutAvatar" src={"tali-large.png"} alt="tali scheer avatar"/>
        <h1>A Bit About Me</h1>

        <div className="textWidth">
          <p>
          Hi! My name is Tali. I'm a full stack web developer with knowledge in Ruby, Rails,
          Javascript, React, Redux, HTML and CSS. I am also skilled in Photoshop and Illustrator.
          </p>
          <p>
          For the past 11+ years, I worked towards building the Baby K’tan
          brand from an idea born in my sister's kitchen, to a globally recognized
          baby products company.
          </p>
          <p>
          I bring my creativity, design skills and critical thinking
          to every project.
          </p>
          <p>
          Reach out or learn more!
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
            <a href="https://thatgalcodes.wordpress.com/" target="_blank" rel="noopener noreferrer">
              <Icon link name='wordpress' size="large"
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
