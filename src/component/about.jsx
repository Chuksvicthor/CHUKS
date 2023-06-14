import React from 'react'
import { Navbar } from './navbar'
import about1 from './images/about1.jpg'
import about2 from './images/about2.jpg'
import about3 from './images/about3.jpg'
import about4 from './images/about4.jpg'
import about5 from './images/about5.jpg'
import about6 from './images/about6.jpg'
import about7 from './images/about7.jpg'
import about8 from './images/about8.jpg'
import about9 from './images/about9.jpg'

export const About = () => {
  return (
    <div>
        <Navbar></Navbar>
        <h1 className='purple fs-3 mt-4 fw-bold text-center'>About us</h1>
        <p className='px-4 fs-5 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In est omnis, labore fugit, aspernatur at ut reiciendis eligendi nisi sunt exercitationem sapiente atque beatae temporibus! Labore dicta minima rem sequi magni, veniam obcaecati placeat ut harum enim numquam. Sunt eligendi ipsum deserunt officiis, molestiae pariatur earum excepturi consequuntur. Molestias accusantium tempore fugit. Obcaecati aut iure laborum, porro animi quidem nesciunt eveniet ipsa similique? Ab eos deserunt ex commodi? Quod, dolores!</p>
        <div className='d-flex gap-5 aboutimages mt-5' data-aos="zoom-in">
            <img src={about1} alt="" className="aboutimage" />
            <img src={about2} alt="" className="aboutimage" />
            <img src={about3} alt="" className="aboutimage" />
            <img src={about4} alt="" className="aboutimage" />
            <img src={about5} alt="" className="aboutimage" />
            <img src={about6} alt="" className="aboutimage" />
            <img src={about7} alt="" className="aboutimage" />
            <img src={about8} alt="" className="aboutimage" />
            <img src={about9} alt="" className="aboutimage" />
        </div>
    </div>
  )
}
