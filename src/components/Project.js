import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

class Project extends React.Component {

  openSite = (url) => window.open(`${url}`, "_blank")

  renderDemoButton = () => {
    if(this.props.project.demo.length){
      return(
        <button className="projectButton" onClick={() => this.openSite(this.props.project.demo)} >
          <Icon name='play'/>Demo Video
        </button>
      )
    } else {
      return(
        <button disabled className="projectButtonDisabled" >
          <Icon name='play'/>Demo Video
        </button>
      )
    }
  }

  render(){
    const { project } = this.props
    return(
      <div className="techItem">
          <Card>
          <Image src={project.img} wrapped ui={false} />

            <Card.Content>
              <Card.Header>{project.name}</Card.Header>
              <Card.Meta>{project.technologies}</Card.Meta>
              <Card.Description>{project.description}</Card.Description>
            </Card.Content>

            <Card.Content extra>
              API Integrations<br/>{project.api}
            </Card.Content>

            <button className="projectButton" onClick={() => this.openSite(project.url)} >
              <Icon name='linkify'/>View Site
            </button>

            {this.renderDemoButton()}

          </Card>
      </div>
    )
  }
}

export default Project
