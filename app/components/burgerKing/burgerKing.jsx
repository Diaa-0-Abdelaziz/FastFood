import React from 'react'
import Image from 'next/image'
import burgerKing from '../../imges/BurgerKing.png'
import { MdAttachMoney } from "react-icons/md";
import "./burgerking.css";
export default function BurgerKing() {
  return (
    <div className="burgerking mt-5">
       <div className="row p-5 w-100 d-flex align-items-center">
        <div className="col-lg-6 col-md-6">
        <Image width={400} height={200} src={burgerKing} className='w-100 h-100'  alt={burgerKing}/>
        </div>
        <div className="col-lg-4 col-md-6">
           <h2>Burger King</h2>
           <h6>Together with McDonald’s, Burger King has grown to become synonymous with burgers in the US.</h6>
           <p className='price'><MdAttachMoney/>6 <span><MdAttachMoney/>8</span></p>
           <span className='orderNow'>order now</span>
        </div>
       </div>
    </div>
  )
}