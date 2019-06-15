import React from 'react';
import { Icon } from 'semantic-ui-react'

class Nav extends React.Component {

  linkClass = (path) => window.location.hash === path ? "navLink" : "navLink"

  render(){
      return(
        <div id="nav">

          <span className="navLogo fadeIn4">
          <a href='#home'> TS </a>
          </span>

          <span className="navLinks fadeIn4">
            <a className={this.linkClass('#about')} href='#about'>About</a>
            <a className={this.linkClass('#tech')} href='#tech'>Tech</a>
            <a className={this.linkClass('#design')} href='#design'>Design</a>
          </span>

          <span className="navIcons fadeIn4">
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
          </span>

        </div>
      )
    }
  }

export default Nav
