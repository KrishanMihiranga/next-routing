import React from 'react'
import Link from 'next/link'

const page = () => {
  const vegies = [
    {
      id: 1,
      veginame: "Broccoli"
    },
    {
      id: 2,
      veginame: "Spinach"
    },
    {
      id: 3,
      veginame: "Pumpkin"
    },
    {
      id: 4,
      veginame: "Beans"
    },

  ]

  return (
    <>
      <div>Vegies Page</div>
      <ul>
        {vegies.map((item, index) => {
          return (
            <li key={index}><Link href={`/products/vegies/${item.veginame}`}>{item.veginame}</Link></li>
          )
        })}
      </ul>
    </>
  )
}

export default page