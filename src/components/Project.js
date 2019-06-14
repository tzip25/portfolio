import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

class Project extends React.Component {

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

            <Card.Content extra>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Icon name='linkify' color="blue"/>
                View Site
              </a>
              </Card.Content>

            <Card.Content extra>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Icon name='play' color="blue"/>
                Demo Video
              </a>
            </Card.Content>

          </Card>
      </div>
    )
  }
}

export default Project
