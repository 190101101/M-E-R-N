import React from 'react'

const category = [
    'all', 
    'food', 
    'drink', 
    'fruit', 
    'vegetable', 
    'dessert', 
    'chocolate', 
    'ice cream'
]

const Categories = () => {
  return (
    <ul className="flex md:flex-col gap-4 text-lg">
        {category.map((item) => 
            <li className="bg-green-700 px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all text-center min-w-[145px]">
            <span>{item}</span>
        </li>
        )}
    </ul>
  )
}

export default Categories;
