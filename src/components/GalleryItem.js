import React from 'react';

class GalleryItem extends React.Component {

  render(){
    const { project } = this.props
    return(
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={project.imgUrl} className="galerryImg" alt={`${project.name} ${project.type}`}/>
          </div>
          <div className="flip-card-back">
            <h2 className="designProjectText">{project.type}</h2>
            <p className="designProjectText">{project.description}</p>
            <img src={project.imgUrl} className="galerryHoverImg" alt={`${project.name} ${project.type}`}/>
          </div>
        </div>
      </div>
    )
  }
}

export default GalleryItem
