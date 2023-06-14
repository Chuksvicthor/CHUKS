import React from 'react'
import { Navbar } from './navbar'
import heroimage from './images/hero-img.png'
import client1 from './images/client-1.png'
import client2 from './images/client-2.png'
import client3 from './images/client-3.png'
import client4 from './images/client-4.png'
import client5 from './images/client-5.png'
import client6 from './images/client-6.png'
import client7 from './images/client-7.png'
import client8 from './images/client-8.png'
import { Navigate, useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
        <Navbar></Navbar>
        <div className='mybg'>
            <h2 className='purple text-center' data-aos="zoom-in"> We offer modern solutions for growing business </h2>
            <p className='fs-5 text-center my-2 px-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam minima, facere enim error ipsa natus sed et quos? Voluptates, fugit.</p>
            <button className="btn btn-primary btn-lg my-4" onClick={() => {
                    navigate("/pricing")
                }}>Get started</button>
            <img src={heroimage} alt="" className='my-4 img-fluid' />
        </div>
        <div className="clients mt-5 px-3">
            <h2 className='purple text-center fw-bold fs-2 mb-4'> Our clients </h2>
            <div className="clientsimage d-flex justify-content-center align-items-center gap-5 flex-wrap px-3 my-5" data-aos="zoom-in">
                <img src={client1} alt="" className="clientimage" />
                <img src={client2} alt="" className="clientimage" />
                <img src={client3} alt="" className="clientimage" />
                <img src={client4} alt="" className="clientimage" />
                <img src={client5} alt="" className="clientimage" />
                <img src={client6} alt="" className="clientimage" />
                <img src={client7} alt="" className="clientimage" />
                <img src={client8} alt="" className="clientimage" />
            </div>
        </div>
        <div className="who">
                <h3 data-aos="zoom-in">Who are WE?</h3>
                <p className='mt-3 fs-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus officiis animi consequuntur similique repellendus fuga dolores, voluptate ex cum libero esse, iste nostrum ut vel rerum amet ullam quam voluptatibus corporis? Dolorem ratione rem, adipisci unde possimus ipsam delectus laborum sunt praesentium, rerum ullam illo explicabo doloribus consequuntur fuga blanditiis?</p>
                <button className="btn btn-danger btn-lg" onClick={() => {
                    navigate("/about")
                }}>Learn More</button>
            </div>
    </div>
  )
}
