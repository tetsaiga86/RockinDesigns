import React from 'react'
import image from '../data/images'
import link from '../data/links'
class ContactMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cn1: 'none',
      cn2: 'none',
      cn3: 'none',
      cn4: 'none'
    }
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver(num){
    switch (num) {
      case 1:
        this.setState({
          cn1: 'rotate'
        })
        break;
      case 2:
        this.setState({
          cn2: 'rotate'
        })
        break;
      case 3:
        this.setState({
          cn3: 'rotate'
        })
        break;
      case 4:
        this.setState({
          cn4: 'rotate'
        })
        break;
    }
  }

  mouseOut(){
    this.setState({
      cn1: 'none',
      cn2: 'none',
      cn3: 'none',
      cn4: 'none'
    })
  }

  render(){
    return(
      <div>
        <a href={link.linkedin} target="_blank" >
          <img src={image.linkedin}
            className={this.state.cn1}
            onMouseOver={(e) => this.mouseOver(1, e)}
            onMouseOut={this.mouseOut}
            alt="linkedin" />
        </a>
        <a href={link.github} target="_blank">
          <img src={image.github}
            className={this.state.cn2}
            onMouseOver={(e) => this.mouseOver(2, e)}
            onMouseOut={this.mouseOut}
            alt="github" />
        </a>
        <a href={link.facebook} target="_blank">
          <img src={image.facebook}
            className={this.state.cn3}
            onMouseOver={(e) => this.mouseOver(3, e)}
            onMouseOut={this.mouseOut}
            alt="facebook" />
        </a>
        <a href={link.mail}>
          <img src={image.mail}
            className={this.state.cn4}
            onMouseOver={(e) => this.mouseOver(4, e)}
            onMouseOut={this.mouseOut}
            alt="send email" />
        </a>
      </div>
    )
  }
}

export default ContactMenu
