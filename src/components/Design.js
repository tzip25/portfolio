import React from 'react';
import GalleryItem from './GalleryItem'
import designProjects from '../db/DesignProjects.js'
import v4 from 'uuid'

class Design extends React.Component {

  renderProjects = () => designProjects.map(project => <GalleryItem project={project} key={v4()}/>)

  render(){
    return(
      <div className="container designDiv">
        <h1>Graphic Design</h1>
        <div className="gallery">
          {this.renderProjects()}
        </div>
      </div>
    )
  }
}

export default Design
