import React from 'react';
import Project from './Project'
import projects from '../db/TechProjects.js'
import v4 from 'uuid'

class Tech extends React.Component {

  renderProjects = () => projects.map(project => <Project project={project} key={v4()}/>)

  render(){
    return(
      <div className="container techDiv">
        <h1>Technical Projects</h1>
        <div className="gallery">
          {this.renderProjects()}
        </div>
        <br/>
        <h4>Oh, and this portfolio site <span role="img" aria-label="winky face emoji">😉</span> </h4>
      </div>
    )
  }
}

export default Tech
