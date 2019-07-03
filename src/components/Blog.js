import React from 'react';
import BlogPost from './BlogPost'
import v4 from 'uuid'

class Blog extends React.Component {

  state = {
    blogPosts: []
  }

  componentDidMount() {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tali.scheer")
      .then(res => res.json())
      .then(res => {
        this.setState({
          blogPosts: res.items.slice(0,5)
        })
      })
    }

  renderPosts = () => this.state.blogPosts.map(post => <BlogPost post={post} key={v4()}/>)

  render(){
    return(
      <div className="container blogDiv">
        <h1>
          Blog Feed
        </h1>
        {this.renderPosts()}
        <h3>- <a href="https://medium.com/@tali.scheer" target="_blank" rel="noopener noreferrer">See complete blog feed on Medium</a> -</h3>
      </div>
    )
  }
}

export default Blog
