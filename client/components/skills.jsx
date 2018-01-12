import React from 'react'
import {
  Button
} from 'react-bootstrap'

class Skills extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nextTextState:2,
      text1:true,
      text2:false,
      text3:false
    }
    this.toggle = this.toggle.bind(this);
    setInterval(this.toggle, 2000)
  }

  toggle(){
    switch (this.state.nextTextState) {
      case 1:
        return this.setState({
          text1: true,
          text2: false,
          text3: false,
          nextTextState: 2
        });

      case 2:
        return this.setState({
          text1: false,
          text2: true,
          text3: false,
          nextTextState: 3
        });
      case 3:
        return this.setState({
          text1: false,
          text2: false,
          text3: true,
          nextTextState: 1
        });
    }

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
