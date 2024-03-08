"use client"
import React,{useEffect} from 'react'
import Image from 'next/image'
import logo from '../../imges/fast-food-logo.svg'
import facebook from '../../imges/facebook.png'
import instegram from '../../imges/instegram.png'
import linkedin from '../../imges/linkedin.png'
import twitter from '../../imges/twitter.png'
import { BsEnvelope } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import AOS from 'aos';
import 'aos/dist/aos.css';
import"./footer.css"

export default function Footer() {
    useEffect(() => {
    
        AOS.init({
          duration:2000
        })
      }, [])
  return (
    <div className="footer mt-5">
        <div className='container'>

        <div className="row flex-wrap justify-content-between  text-center align-items-center" data-aos="zoom-in">
            
        <ul className=' list-unstyled col-md-2 concat me-5'>
            <li>
            <Image width={2} height={2} src={logo} className=' w-auto h-auto logo'  alt={logo}/>
            </li>
            <li className='ms-4 badge'><span><BsEnvelope/></span>  fastfood_usa@gmail.com</li>
            <li className='ms-4 badge'><span><TbWorld/></span>  www.fastfood_usa.com</li>
        </ul>
        <ul className=' list-unstyled col-md-2'>
            <li className='lihead'>Our menu</li>
            <li>Breakfast</li>
            <li>Lunce</li>
            <li>Dinner</li>
        </ul>
        <ul className=' list-unstyled col-md-2'>
            <li className='lihead'>Information</li>
            <li>About us</li>
            <li>Testimonial</li>
            <li>Event</li>
        </ul>
        <ul className=' list-unstyled col-md-2'>
            <li className='lihead'>Useful Links</li>
            <li>Services</li>
            <li>Support</li>
            <li>Conditions</li>
        </ul>
        <div className='liHeadOfSocial col-md-2 mb-5'>
            <span className='lihead'>Social Handles</span>
            <ul className=' list-unstyled socialIcon d-flex justify-content-around'>
                <li><Image  width={200} height={200} src={facebook} className='w-auto h-auto social'  alt={facebook}/></li>
                <li><Image  width={200} height={200} src={twitter} className=' w-auto h-auto social'  alt={twitter}/></li>
                <li><Image  width={200} height={200} src={instegram} className=' w-auto h-auto social'  alt={instegram}/></li>
                <li><Image  width={200} height={200} src={linkedin} className=' w-auto h-auto social'  alt={linkedin}/></li>
            </ul>
        </div>
        </div>
        </div>
    </div>
  )
}
