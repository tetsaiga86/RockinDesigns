import React from 'react';
import {
  ImageHeader,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from 'react-simple-card';
import {
  Button
} from 'react-bootstrap';
import getImages from '../util/projectCardFunctions/getImage';

class ProjectCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageSrc: []
    }
  }

  componentDidMount(){
    this.setState({
      imageSrc: getImages(this.props.repo.languages),
    })
  }

  renderImages(){
    var images = [];
    this.state.imageSrc.forEach((imageString, idx) => {
      images.push(<img key={`${this.props.repo.id}_${idx}`} className='language-img' src={imageString} />)
    })
    return images
  }

  render(){
    var repo = this.props.repo;
    return(
      <div className='projectCard-div'>
        <Card>
          <CardHeader>
            {repo.name}
          </CardHeader>
          <CardBody>
            {repo.description}
          </CardBody>
          <CardFooter>
            <a className='github-link btn btn-primary' href={repo.html_url} target="_blank" >
              View On Github
            </a>
            {this.renderImages()}
          </CardFooter>
        </Card>
      </div>
    )
  }
}

export default ProjectCard
