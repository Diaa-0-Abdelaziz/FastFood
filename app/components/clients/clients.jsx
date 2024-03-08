"use client"
import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import"./clients.css"
import { FaQuoteRight } from "react-icons/fa";
export default function Clients() {
  useEffect(() => {
    
    AOS.init({
      duration:2000
    })
  }, [])
  return (
   <>
   <div className="clients container mt-5 mb-5">
    <div className=" d-flex flex-wrap justify-content-around">
        <div className="mt-5" data-aos="fade-right">
        <div className="content">
            <div className="circle"></div>
            <div className="circle2"></div>
             <div className="circle3"></div>
             <div className="circle4"></div>
             <div className="circle_center">
                <div className="circle5">

                </div>
             </div>
          </div>  
        </div>
        <div className=" mt-5 d-flex flex-column justify-content-center align-items-center" data-aos="fade-left">
        <div className="icon">
        <FaQuoteRight/>
        </div>
        <p className='message mt-5 mb-3'>Thanks a lot for the prompt service. Really appreciate. Excellence taste in Every Bite.Add a joy of best Taste. Foodie Moments.</p>
        <h3>Adele A. McNeill</h3>
        <p className='natunality'>AMIRICAN</p>
        </div>
    </div>
   </div>
   </>
  )
}
