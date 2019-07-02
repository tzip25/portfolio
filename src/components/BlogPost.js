import React from 'react';

class BlogPost extends React.Component {

  renderDescription = (node) => {
      let div = document.createElement('div')
      div.innerHTML = node
      node = div.innerText
      return node
  }

  render(){
    const { post } = this.props
    return(
      <div className="blogPost">
        <h2>
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            {post.title}
          </a>
        </h2>
        <div className = "blogDescription">
        { this.renderDescription(post.description).slice(0,250) }...
        </div>
        <p>
          <a href={post.link} target="_blank" rel="noopener noreferrer" className="readOnMedium">
          Continue reading on Medium
          </a>
        </p>
      </div>
    )
  }
}

export default BlogPost
