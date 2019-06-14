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
        <div className="techGallery">
          {this.renderProjects()}
        </div>
      </div>
    )
  }
}

export default Tech
