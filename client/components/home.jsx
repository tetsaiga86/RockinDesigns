import React from 'react'
import {
  Grid,
  Row,
  Clearfix,
  Col
} from 'react-bootstrap'
import Header from './header'


class Home extends React.Component {
  render () {
    return (
      <div className="home-div">
        <Header />
        <h1>home loaded</h1>
      </div>
    )
  }
}


export default Home
