import React from 'react';

class GalleryItem extends React.Component {

  render(){
    const { project } = this.props
    return(
      <div className="galleryItem">
          < img src={project.imgUrl} className="galerryImg" alt={`${project.name} ${project.type}`}/>
      </div>
    )
  }
}

export default GalleryItem
