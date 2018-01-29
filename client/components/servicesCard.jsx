import React from 'react';
import {
  ImageHeader,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from 'react-simple-card';

class ServicesCard extends React.Component  {
  render(){
    var service = this.props.service
    return (
      <div>
        <Card>
          <CardHeader>
            {service.name}
          </CardHeader>
          <CardBody>
            {service.description}
          </CardBody>
          <CardFooter>
            {service.footer}
          </CardFooter>
        </Card>
      </div>
    )
  }
}

export default ServicesCard
