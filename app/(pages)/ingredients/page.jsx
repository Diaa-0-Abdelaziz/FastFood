import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import'./ingredients.css'
export default async function Ingredients() {
  async function getIngredients(){
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let {meals} = await data.json()
    console.log(meals)
    return meals;
  }
  const ingredients = await getIngredients()
  return (
    <>
    <div className="ingredient content">
      
    <div className="container">
    <div className="row">
      {ingredients.map((ingredient)=>
      <div className="col-lg-3 col-md-4 col-sm-6 p-2" key={ingredient.strIngredient}>
         <Link href={`/ingredients/${ingredient.strIngredient}`}>
         <article className="position-relative rounded-3 overflow-hidden">
         <Image priority loading="eager" width={600} height={200} src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`} className=' w-100 h-100 image'  alt={ingredient.strIngredient}/>
          <div className="inger position-absolute text-center d-flex justify-content-center align-items-center">
              <h3 className="mx-2 text-light">{ingredient.strIngredient}</h3>
          </div>
      </article>
         </Link>
      </div>
      )}
    </div>
    </div>
    </div>
    </>
  )
}
