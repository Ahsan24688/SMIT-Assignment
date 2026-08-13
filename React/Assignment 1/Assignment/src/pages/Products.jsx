import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Productcard from '../components/Productcard'
import Navbar from '../components/Navbar'
import Footer from '../landingassets/Footer'
import Skeleton from './Skeleton'
import react, { useContext } from 'react'
import { ThemeContext } from '../components/Context'


const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  let { theme, setTheme } = useContext(ThemeContext);


  const fetchproducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products')
      setProducts(response.data.products)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchproducts().then(() => setLoading(false))

  }, [])

  return (
    <>

      <Navbar />
      {(loading) ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-amber-200 m-4 p-4 rounded-2xl'>
          {[...Array(8)].map((index) => (
            <Skeleton key={index} />
          ))}
        </div>
      )

        :
        products.length > 0 ? (
          <>
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-4 p-4 rounded-2xl ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-amber-200 text-black'
              }`}>
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
            <Footer />

            {/* <div className='p-2 m-2 h-100 w-100 bg-amber-200 dark:bg-gray-900 text-white dark:text-blue-500'>
                uvgfiyviesfhvifbvkjfbvfbvbvj
            </div> */}
          </>
        ) : (
          <div className="text-center py-20">
            <h1 className="text-xl font-semibold text-gray-600">No products found.</h1>
          </div>
        )}
    </>
  )
}

export default Products
