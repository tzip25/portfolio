import React from 'react';

class GalleryItem extends React.Component {

  state = {
      isClicked: false
    }

  handleClick = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }))
  }

  leaveItem = () => {
    this.setState({
      isClicked: false
    })
  }

  render(){
    const { project } = this.props
    return(
      <div
        className={this.state.isClicked ? "galleryItemClicked" : "galleryItem"}
        onClick={this.handleClick}
        onMouseLeave={this.leaveItem}
      >
        {
          this.state.isClicked ?
          <div className="designProjectText">
            <h2>{project.type}</h2>
            <p>{project.description}</p>
            <img src={project.imgUrl} className="galerryHoverImg" alt={`${project.name} ${project.type}`}/>
          </div>
          :
          <img src={project.imgUrl} className="galerryImg" alt={`${project.name} ${project.type}`}/>
        }
      </div>
    )
  }
}

export default GalleryItem
