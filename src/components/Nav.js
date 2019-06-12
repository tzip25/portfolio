import React from 'react';
import { Link } from 'react-router-dom'

class Nav extends React.Component {

  render(){
      return(
        <>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/tech">Technical Projects</Link>
          <Link to="/design">Graphic Design Projects</Link>
        </>
      )
    }
  }

export default Nav
