import React from 'react';

class Nav extends React.Component {

  linkClass = (path) => window.location.hash === path ? "navLink" : "navLink"

  render(){
      return(
        <div className="nav fadeIn4">
          <a className={this.linkClass('#home')} href='#home'> Home </a>
          <a className={this.linkClass('#about')} href='#about'>About</a>
          <a className={this.linkClass('#tech')} href='#tech'>Tech</a>
          <a className={this.linkClass('#design')} href='#design'>Design</a>
        </div>
      )
    }
  }

export default Nav
