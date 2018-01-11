import React from 'react'
import {
  Grid,
  Row,
  Clearfix,
  Col,
} from 'react-bootstrap'
import Header from './header'


class Home extends React.Component {
  componentWillMount(){
    this.setState({
      text1:true,
      text2:false,
      text3:false
    })
  }

  render () {
    return (
      <div>
        <Header />
        <div className="home-div">
          <Grid>
            <Row>
              <Col sm={1} md={2}>
                <h1>R. Kyle Kennedy</h1>

              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}


export default Home
