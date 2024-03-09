"use client"
import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./main.css";
export default function MainSection() {
  useEffect(() => {
    
    AOS.init({
      duration:2000
    })
  }, [])
  return (
    <>
    <main className=' vh-100 w-100'>
      <div className="container h-100 px-4">
         <div className="row h-100">
         <div className="col-md-6 w-auto position-absolute top-50 translate-middle-y">
          <div className="content pt-5">
            <p className='mt-5'>FAST FOOD BURGERS</p>
          <h1>The fastest food, for instant hunger.</h1>
          <p className='ex my-5'>Some food has looked so awful that it is looked like something that the dog is brought home, yet after one mouthful I have been left eating my thoughts, my words & my food and gone back for seconds.</p>
          <span>order now</span>
          </div>
          </div>
         </div>
      </div>
    </main>
    </>
  )
}
