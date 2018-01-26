import React from 'react'
import Header from './header'
import ProjectCard from './projectCard'
import {
  Grid,
  Row,
  Clearfix,
  Col
} from 'react-bootstrap'
import $ from 'jquery'

const githubJsonUrl = '/github';
class Portfolio extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      repos: []
    }
  }

  componentDidMount(){
    $.getJSON('/github', (data) => {
      this.setState({
        repos: data
      })
    })
  }

  renderProjects(){
    var projects = [];
    this.state.repos.forEach(repo => {
      projects.push(
        <ProjectCard key={repo.id} repo={repo} />
      )
    })
    return projects
  }

  render () {
    return (
      <div className="portfolio-div">
        <Header />
        {this.renderProjects()}
      </div>
    )
  }
}


export default Portfolio
