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
import ContactForm from './contactForm'

class Home extends React.Component {
  render () {
    return (
      <div className="full-page">
        <Header />
        <div className="home-div">
          <Grid>
            <Row>
              <Col>
                <h1>R. Kyle Kennedy</h1>
                <Skills>
                </Skills>
                <Intro>
                </Intro>
              </Col>
              <Col>
                <ContactMenu>
                </ContactMenu>
              </Col>
              <Col>
                <ContactForm>
                </ContactForm>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}


export default Home
