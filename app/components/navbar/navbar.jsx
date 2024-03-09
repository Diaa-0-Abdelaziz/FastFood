"use client"
import React,{useState} from 'react';
import Image from 'next/image';
import logo from '../../imges/fast-food-logo.svg';
import { CgMenuGridR } from "react-icons/cg";
import { AiFillCloseSquare } from "react-icons/ai";
import "./navbar.css"
import Link from 'next/link';
export default function Navbar() {
    const [open, setOpen] = useState("link")
    function openWindow(){
      setOpen("link toggle")
    }
    function closeWindow(){
      setOpen("link")
    }
   let links =[
    {
      linkName:"Home",
      pathName: "/"
    },
    {
      linkName:"Categories",
      pathName: "/categories"
    },
    {
      linkName:"Area",
      pathName: "/area"
    },
    {
      linkName:"Ingredients",
      pathName: "/ingredients"
    },
    {
      linkName:"Contact Us",
      pathName: "/contactUs"
    },
   ]
  return (
    <>
    <div className="navbar fixed-top py-1 px-5">
   <div className='icon'>
   <Image priority width={2} height={2} src={logo} className=' w-auto h-auto logo'  alt={logo}/>
   </div>
   <div className="menu fs-3" onClick={openWindow}>
   <CgMenuGridR/>
   </div>
   <div className={open}>
   <span onClick={closeWindow} className=' close position-absolute end-0 m-2 fs-4 cursor'> <AiFillCloseSquare/></span>
   <ul className=' list-unstyled'>
    {links.map((link, index)=>
    <li key={index}>
    <Link href={link.pathName}>{link.linkName}</Link>
  </li>
    )}
   </ul>
   <div className='carterth mt-2'>
  <span>order now</span>
   </div>
   </div>
   </div>
    </>
  )
}
