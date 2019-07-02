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
          blogPosts: res.items
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
      </div>
    )
  }
}

export default Blog
