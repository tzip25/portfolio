import React from 'react';

class GalleryItem extends React.Component {

  render(){
    const { project } = this.props
    return(
      <div className="galleryItem">
          {project.type}
      </div>
    )
  }
}

export default GalleryItem
