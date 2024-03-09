import Image from 'next/image'
import React from 'react'
import './details.css'
export default async function Details({params}) {
    const id = params.details
    async function getAPTById(){
        let api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        let {meals} = await api.json()
        console.log(meals)
        return meals
      }
    const details = await getAPTById()
    
  return (
    <>
        <div className="details">
      <div className="container">
      {details.map((detailsOfMeal)=>
      <div className="row details">
      <div className="img col-md-5">
        <Image priority loading="eager" width={600} height={200} src={detailsOfMeal.strMealThumb} className="w-100 h-auto" alt={detailsOfMeal.strMealThumb}/>
        <p className="fs-4">{detailsOfMeal.strMeal}</p>
      </div>
 
      <div className="col-md-7">
          <h1>Instructions</h1>
          <p> {detailsOfMeal.strInstructions} </p>
          <ul className="list-unstyled">
              <li><span className="fs-3 fw-bold">Area: </span><span className="fs-5">{detailsOfMeal.strArea}</span></li>
              <li><span className="fs-3 fw-bold">Category: </span><span className="fs-5">{detailsOfMeal.strCategory}</span></li>
          </ul>
            <h3>Tags:</h3>
            
            {detailsOfMeal.strTags !== null ? <span className="badge fw-lighter bg-info fs-5 p-2 mb-2">{detailsOfMeal.strTags}</span> : ''} 
               <ul className="list-unstyled d-flex">
               {detailsOfMeal.strSource !== null ? <li><a href={detailsOfMeal.strSource} className="btn btn-success me-2" target="_blank">Source</a></li> : ''}
               {detailsOfMeal.strYoutube !== null ? <li><a href={detailsOfMeal.strYoutube} className="btn btn-danger" target="_blank">Youtube</a></li> : ''}
            </ul>
      </div>
 
   </div>
      )}
      </div>
      </div>
    </>
  )
}
