import React from 'react'
import Header from './header'
import services from '../data/services'
import ServicesCard from './servicesCard'

class Services extends React.Component {
  loadServices(){
    return services.map(service => <ServicesCard key={service.name} service={service} />)
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
