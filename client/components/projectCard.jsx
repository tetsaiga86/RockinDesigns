import React from 'react'

class ProjectCard extends React.Component {

  render(){
    var repo = this.props.repo;
    return(
      <div className='projectCard-div'>
        <h1>{repo.name}</h1>
      </div>
    )
  }
}

export default ProjectCard
