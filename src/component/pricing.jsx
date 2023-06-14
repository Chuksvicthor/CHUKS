import React from 'react'
import { Navbar } from './navbar'
import pricing1 from './images/pricing-business.png'
import pricing2 from './images/pricing-free.png'
import pricing3 from './images/pricing-starter.png'
import pricing4 from './images/pricing-ultimate.png'

export const Pricing = () => {
  return (
    <div>
        <Navbar></Navbar>
        <h3 className='my-3 text-center purple fw-bold '>Our Pricing</h3>
        <h3 className='text-center'>Here is our pricing list</h3>

        <div className='d-flex justify-content-around align-items-center mt-5 flex-wrap' data-aos="zoom-in">
        <div class="card" style={{width: "18rem"}}>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
        <img src={pricing1} alt="" className='pricingimage' />
    </li>
    <li class="list-group-item">$149.99</li>
    <li class="list-group-item">Annual plan</li>
  </ul>
</div>
        <div class="card" style={{width: "18rem"}}>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
        <img src={pricing2} alt="" className='pricingimage' />
    </li>
    <li class="list-group-item">$79.99</li>
    <li class="list-group-item">6 months plan</li>
  </ul>
</div>
        <div class="card" style={{width: "18rem"}}>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
        <img src={pricing3} alt="" className='pricingimage' />
    </li>
    <li class="list-group-item">$14.99</li>
    <li class="list-group-item">Monthly plan</li>
  </ul>
</div>
        </div>
    </div>
  )
}
