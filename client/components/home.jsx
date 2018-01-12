import React from 'react'
import {
  Grid,
  Row,
  Clearfix,
  Col,
  Button
} from 'react-bootstrap'
import Header from './header'
import Skills from './skills'
import Intro from './intro'
import ContactMenu from './contactMenu'

class Home extends React.Component {
  render () {
    return (
      <div className="full-page">
        <Header />
        <div className="home-div">
          <Grid>
            <Row>
              <Col sm={1} md={2}>
                <h1>R. Kyle Kennedy</h1>
                <Skills>
                </Skills>
                <Intro>
                </Intro>
                <ContactMenu>
                </ContactMenu>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}


export default Home
