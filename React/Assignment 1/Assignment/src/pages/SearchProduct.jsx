import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Productcard from '../components/Productcard'
import Navbar from '../components/Navbar'
import Footer from '../landingassets/Footer'
import Skeleton from './Skeleton'
import react, { useContext } from 'react'
import { ThemeContext } from '../components/Context'


const SearchProduct = () => {
    let [searchTerm, setSearchTerm] = useState("")   // for search term (where we will store the value of input field)

    let [products, setProducts] = useState([])   // for products (where we will store the products data)

    let [searchResults, setSearchResults] = useState([])   // for search results (where we will store the searched products data)

    let [loading, setLoading] = useState(true)

    let { theme, setTheme } = useContext(ThemeContext);


    let Products = async () => {          // for fetching products
        try {
            let response = await axios.get('https://dummyjson.com/products')
            console.log(response.data)
            setProducts(response.data.products)
        }
        catch (error) {
            console.error(error)
        }

    }


    let SearchProducts = async () => {    //for searching products
        try {
            let response = await axios.get(`https://dummyjson.com/products/search?q=${searchTerm}`)
            console.log(response.data)
            setSearchResults(response.data.products)
        }
        catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {   // for fetching products on page load
        Products().then(() => setLoading(false))
    }, [])

    useEffect(() => {   // for searching products on search term change
        setSearchResults([])
        if (searchTerm.length > 1) {
            setLoading(true)
            SearchProducts().then(() => setLoading(false))
        }
    }, [searchTerm])

    let displayList = searchTerm.length > 1 ? searchResults : products;

    return (
        <>
            <Navbar />
            <div className="flex flex-col gap-4 m-4 p-4">
                <input type="text" placeholder="Search Product" onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-2 rounded-lg p-2 justify-end bg-white" />
            </div>
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-amber-200 m-4 p-4 rounded-2xl ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-amber-200 text-black'}`}>

                {
                    (loading) ? (
                        <div className=' col-span-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-amber-200 m-4 p-4 rounded-2xl'>
                            {[...Array(8)].map((index) => (
                                <Skeleton key={index} />
                            ))}
                        </div>
                    )
                        :
                        displayList.length > 0 ? (
                            displayList.map((Product, index) => {
                                return (
                                    <Productcard key={index}
                                        id={Product.id}
                                        image={Product.thumbnail}
                                        title={Product.title}
                                        description={Product.description}
                                        category={Product.category} />
                                )
                            })
                        )
                            :
                            (
                                <div className="text-center py-20">
                                    <h1 className="text-xl font-semibold text-gray-600">No products found.</h1>
                                </div>
                            )
                }
            </div>

            <Footer />
        </>
    )
}
export default SearchProduct
