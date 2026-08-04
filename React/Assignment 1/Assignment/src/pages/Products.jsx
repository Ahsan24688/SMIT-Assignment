import axios from 'axios'
import React from 'react'
import react, { useState, useEffect } from 'react'
import Productcard from '../components/Productcard'

const Products = () => {
  let [products, setProducts] = useState([])

  let fetchproducts = async () => {
    try {
      let response = await axios.get('https://dummyjson.com/products')
      console.log(response.data)
      setProducts(response.data.products)
    }
    catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchproducts()
  }, [])

  return (

    <>
      {(products.length > 0) ?

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((products, index) => {
            return (
              <div key={index}>
                <Productcard
                  id={products.id}
                  image={products.thumbnail}
                  title={products.title}
                  description={products.description}
                  category={products.category} />
              </div>
            )
          })}
        </div>
        :
        <div className="text-center py-20">
          <h1 className="text-xl font-semibold text-gray-600">Loading...</h1>
        </div>
      }



    </>
  )
}



export default Products
