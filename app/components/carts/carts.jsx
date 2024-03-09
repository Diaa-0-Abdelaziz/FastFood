"use client"
import React,{useEffect} from 'react'
import Image from 'next/image'
import cart1 from '../../imges/cart1.jpeg'
import cart2 from '../../imges/cart2.jpeg'
import cart3 from '../../imges/cart3.jpeg'
import cart4 from '../../imges/cart4.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./carts.css";

export default function Carts() {
  useEffect(() => {
    
    AOS.init({
      duration:2000
    })
  }, [])
    let cards = [
        {
          img:cart1,
          title:"Chicken Paell",
          explane:"We just don't make and sell food.Good food warms."
        },
        {
            img:cart2,
            title:"Taco Del Mar",
            explane:"Taco Del Mar brings the best out of Mexican cuisine with fresh."
          },
          {
            img:cart3,
            title:"Bon Au Pain",
            explane:"Bon Au Pain is a pioneer in the healthy fast food scene."
          },
          {
            img:cart4,
            title:"Pizza Hut.",
            explane:"Although the Pizza Hut Menu Prices have tumbled over the years."
          }
    ]
  return (
   <>
<div className="carts mt-5 container">

<div className="row">
   
{(cards.map((card, index)=>
 <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4" data-aos="zoom-in-down">
 <div className="card">
 <Image loading="eager" width={200} height={200} src={card.img} className='w-100 h-auto'  alt={card.img}/>
 <div className="card-body text-center">
     <h5 className="card-title">{card.title}</h5>
     <p className="card-text">{card.explane.slice(0,50)}</p>
     </div>
 </div>
</div>
))}

   
</div>

</div>




   </>
  )
}
