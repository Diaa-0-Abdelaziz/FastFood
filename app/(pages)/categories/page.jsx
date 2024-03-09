import React from 'react'
import Image from 'next/image'
import'./category.css'
import Link from 'next/link'
export default async function Categories() {
  async function getCategories(){
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let {categories} = await data.json()
    console.log(categories)
    return categories;
  }
  const categories = await getCategories()
  // data-name-of-Category = ${categories[i].strCategory}
  return (
    <>
    <div className="caregory content">
      
    <div className="container">
    <div className="row">
      {categories.map((category)=>
      <div className="col-lg-3 col-md-4 col-sm-6 p-2" key={category.idCategory}>
         <Link href={`/categories/${category.strCategory}`}>
         <article className="position-relative rounded-3 overflow-hidden">
         <Image priority loading="eager" width={600} height={200} src={category.strCategoryThumb} className=' w-100 h-100 image'  alt={category.strCategoryThumb}/>
          <div className="categor position-absolute text-center">
              <h3 className="mx-2 text-light">{category.strCategory}</h3>
              <p className="text-light">{category.strCategoryDescription.split(' ').slice(0, 10).join(' ')}</p>
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
