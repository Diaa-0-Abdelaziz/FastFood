"use client"
import React,{useEffect} from 'react'
import Image from 'next/image'
import BigCart1 from '../../imges/BigCart1.jpeg'
import BigCart2 from '../../imges/BigCart2.jpeg'
import BigCart3 from '../../imges/BigCart3.jpeg'
import BigCart4 from '../../imges/BigCart4.jpeg'
import { MdAttachMoney } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import'./bigCard.css'
export default function Bigcard() {
  useEffect(() => {
    
    AOS.init({
      duration:2000
    })
  }, [])
    let BigCards = [
        {
          img:BigCart4,
          title:"Papa John’s",
          explane:"Papa John’s is one of the most popular fast-food.",
          newPrice:6,
          oldPrice:8
        },
        {
            img:BigCart2,
            title:"Pizza Hutr",
            explane:"Although the Pizza Hut Menu Prices .",
            newPrice:3,
            oldPrice:7
        },
          {
            img:BigCart3,
            title:"Burger King",
            explane:"Together with McDonald’s, Burger King.",
            newPrice:5,
            oldPrice:6
          },
          {
            img:BigCart1,
            title:"Dairy Queen",
          explane:"Dairy Queen is one of the biggest fast-food.",
          newPrice:4,
          oldPrice:6
          }
    ]
  return (
    <>
    <div className="bigcard container my-5">
    <div className="row">
        {BigCards.map((card, index)=>
        <div key={index} className="col-md-6 p-2" data-aos="zoom-in">
             <div className="cart position-relative">
             <Image loading="eager" width={600} height={200} src={card.img} className=' w-100 h-100 image'  alt={card.img}/>
            <div className={`content position-absolute  p-5 ${index === 0 || index === 2 ? `top-0 end-0`: `top-0 start-0`}`}>
                <h2>{card.title}</h2>
                <p className='ex'>{card.explane}</p>
                <p className='price'><MdAttachMoney/>{card.newPrice} <span><MdAttachMoney/>{card.oldPrice}</span></p>
                <span className='orderNow'>order now</span>
            </div>
             </div>
        </div>
        )}
        </div>
    </div>
    </>
  )
}
