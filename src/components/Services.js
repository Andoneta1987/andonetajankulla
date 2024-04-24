import React from 'react'
import { services } from '../content/services'

const Services = () => {
  return (
    <section className="wrapper">
        {services.map((services,index)=>{
           return( 
           <div className="card" key="index">
            <img className="icon" src={services.icon} alt="services"/>
            <h2 className="title"> {services.title} </h2>
            <p className="description">{services.description}</p>
</div>
            )
        })}
    </section>

  )
}

export default Services