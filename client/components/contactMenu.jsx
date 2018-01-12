import React from 'react'

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

    // console.log(this.state);
  }

  mouseOut(){
    this.setState({
      cn1: 'none',
      cn2: 'none',
      cn3: 'none',
      cn4: 'none'
    })
    // console.log(this.state)
  }

  render(){
    return(
      <div>
        <a href="https://www.linkedin.com/in/r-kyle-kennedy-5b7051125/"
          target="_blank" >
          <img src="/images/linkedin/ffffff-linkedin-48.ico"
            className={this.state.cn1}
            onMouseOver={(e) => this.mouseOver(1, e)}
            onMouseOut={this.mouseOut}
            alt="linkedin" />
        </a>
        <a href="https://github.com/tetsaiga86" target="_blank">
          <img src="/images/github/ffffff-github-48.ico"
            className={this.state.cn2}
            onMouseOver={(e) => this.mouseOver(2, e)}
            onMouseOut={this.mouseOut}
            alt="github" />
        </a>
        <a href="https://www.facebook.com/elyk.kennedy" target="_blank">
          <img src="/images/facebook/ffffff-facebook-48.ico"
            className={this.state.cn3}
            onMouseOver={(e) => this.mouseOver(3, e)}
            onMouseOut={this.mouseOut}
            alt="facebook" />
        </a>
        <a href="mailto:r.kyle.kennedy@gmail.com">
          <img src="/images/message/ffffff-message-48.ico"
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
