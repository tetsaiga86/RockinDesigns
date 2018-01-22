import React from 'react'
import {
  Button
} from 'react-bootstrap'

class Skills extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentTextState:1,
      text1:true,
      text2:false,
      text3:false
    }
    this.toggle = this.toggle.bind(this);
    this.toggleInterval = setInterval(() => {this.toggle()}, 2000);
  }

  componentWillUnmount(){
    clearInterval(this.toggleInterval)
  }

  nextState(currentTextState){
    var next = currentTextState+1
    if(next > 3){
      next = 1
    }
    return next
  }

  toggle(){
    var next = this.nextState(this.state.currentTextState);
    var propName = 'text'+next;
    this.setState({
      currentTextState: next,
      text1:false,
      text2:false,
      text3:false,
      [propName]: true
    })
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
