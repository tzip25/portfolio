import React from 'react';
var moment = require('moment');

class BlogPost extends React.Component {

  state = {
    readOnMedium: false
  }

  handleHover = () => {
    this.setState({
      readOnMedium: true
    })
  }

  leaveHover = () => {
    this.setState({
      readOnMedium: false
    })
  }

  renderDescription = (node) => {
      let div = document.createElement('div')
      div.innerHTML = node
      node = div.innerText
      return node
  }

  render(){
    const { post } = this.props
    return(
      <a href={post.link} target="_blank" rel="noopener noreferrer">
        <div onMouseOver={this.handleHover} onMouseLeave={this.leaveHover} className="blogPost">
          <div className={this.state.readOnMedium ? "readOnMedium mobileHide" : "hide"}>
            Continue reading on Medium
          </div>
          <div className="blogContent">
            <h2>
              {post.title}
            </h2>
            <p>{moment(post.pubDate).format("MMM Do YYYY")}</p>
            <div className = "blogDescription">
            { this.renderDescription(post.description).slice(0,250) }...
            </div>
            <div className="mobileReadOnMedium hide">
            Continue reading on Medium
            </div>
          </div>
        </div>
      </a>
    )
  }
}

export default BlogPost
