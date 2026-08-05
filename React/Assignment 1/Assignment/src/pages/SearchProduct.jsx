import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Productcard from '../components/Productcard'
import Navbar from '../components/Navbar'

const SearchProduct = () => {
    let [searchTerm, setSearchTerm] = useState("")   // for search term (where we will store the value of input field)

    let [products, setProducts] = useState([])   // for products (where we will store the products data)

    let [searchResults, setSearchResults] = useState([])   // for search results (where we will store the searched products data)



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
        Products()
    }, [])

    useEffect(() => {   // for searching products on search term change
        setSearchResults([])
        if (searchTerm.length > 1) {
            SearchProducts()
        }
    }, [searchTerm])


    return (
        <div>
            <Navbar />
            <input type="text" placeholder="Search Product" onChange={(e) => setSearchTerm(e.target.value)} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    (searchTerm.length > 1 ? searchResults : products).map((Product, index) => {
                        return (
                            <Productcard key={index}
                                id={Product.id}
                                image={Product.thumbnail}
                                title={Product.title}
                                description={Product.description}
                                category={Product.category} />
                        )
                    })}
            </div>
        </div>
    )
}
export default SearchProduct
