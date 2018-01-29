import React from 'react'
import Header from './header'
import services from '../data/services'
import ServicesCard from './servicesCard'

class Services extends React.Component {
  loadServices(){
    var serviceCards = [];
    Object.keys(services).forEach((key) => {
      serviceCards.push(
        <ServicesCard key={key} service={services[key]}></ServicesCard>
      )
    })
    return serviceCards
  }

  render () {
    return (
      <div className="services-div">
        <Header />
        {this.loadServices()}
      </div>
    )
  }
}


export default Services
