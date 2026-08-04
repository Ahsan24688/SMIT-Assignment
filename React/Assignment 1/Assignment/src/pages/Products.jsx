import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Productcard from '../components/Productcard'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchproducts = async () => {
    setLoading(true)
    try {
      const response = await axios.get('https://dummyjson.com/products')
      setProducts(response.data.products)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchproducts()
  }, [])

  return (
    <>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <Productcard key={index} loading={true} />
          ))}
        </div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index}>
              <Productcard
                id={product.id}
                image={product.thumbnail}
                title={product.title}
                description={product.description}
                category={product.category}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h1 className="text-xl font-semibold text-gray-600">No products found.</h1>
        </div>
      )}
    </>
  )
}

export default Products
