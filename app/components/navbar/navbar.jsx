"use client"
import React,{useState} from 'react';
import Image from 'next/image';
import logo from '../../imges/fast-food-logo.svg';
import { CgMenuGridR } from "react-icons/cg";
import { AiFillCloseSquare } from "react-icons/ai";
import "./navbar.css"
export default function Navbar() {
    const [open, setOpen] = useState("link")
    function openWindow(){
      setOpen("link toggle")
    }
    function closeWindow(){
      setOpen("link")
    }
  return (
    <>
    <div className="navbar fixed-top py-1 px-5">
   <div className='icon'>
   <Image width={2} height={2} src={logo} className=' w-auto h-auto logo'  alt={logo}/>
   </div>
   <div className="menu fs-3" onClick={openWindow}>
   <CgMenuGridR/>
   </div>
   <div className={open}>
   <span onClick={closeWindow} className=' close position-absolute end-0 m-2 fs-4 cursor'> <AiFillCloseSquare/></span>
   <ul className=' list-unstyled'>
    <li>Home</li>
    <li>Pages</li>
    <li>Serives</li>
    <li>Projects</li>
    <li>Blog</li>
    <li>Contact Us</li>
   </ul>
   <div className='carterth mt-2'>
  <span>order now</span>
   </div>
   </div>
   </div>
    </>
  )
}
