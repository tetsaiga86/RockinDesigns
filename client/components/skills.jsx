import React from 'react'
import {
  Button
} from 'react-bootstrap'
import toggle from '../util/skillsFunctions/toggle'

class Skills extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentTextState:1,
      text1:true,
      text2:false,
      text3:false
    }
    this.toggle = toggle.bind(this);
    setInterval(() => {this.toggle(this)}, 2000);
  }

  render(){
    return(
      <div>
        <h1 className={this.state.text1 ? 'show animated rubberBand' : 'hide'}>Full-Stack Web Developer</h1>
        <h1 className={this.state.text2 ? 'show animated rubberBand' : 'hide'}>Android App Developer</h1>
        <h1 className={this.state.text3 ? 'show animated rubberBand' : 'hide'}>Windows App Developer</h1>
      </div>
    )
  }
}

export default Skills
