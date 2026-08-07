import React from 'react'
import img from './1.png'
import img2 from './2.png'
import img3 from './3.png'
import img4 from './4.png'
import Footer from './Footer'

const Hero = () => {
    return (
        <div>
            <div className="flex justify-center m-4">
                <img src={img} alt="Landing Page Image"
                    className="w-full h-150  rounded-2xl" />
            </div>
            <div className="flex flex-col items-center text-center m-4 bg-amber-200 rounded-2xl">
                <div className="flex flex-col justify-center">
                    <h1 className=" text-4xl font-bold text-black m-4">
                        Lets Explore Products</h1>
                    <p className="text-lg text-black-700 m-8">Explore our latest range of premium products <br />crafted just for you. Find your favorites today and experience <br /> unmatched quality, sleek design, and everyday reliability that fits your lifestyle perfectly</p>
                </div>

                <div className="flex flex-wrap justify-center gap-10 m-8">
                    <img src={img2} alt="Image" className='w-64 h-80 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-4xl cursor-pointer' />
                    <img src={img3} alt="Image" className='w-64 h-80 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-4xl cursor-pointer' />
                    <img src={img4} alt="Image" className='w-64 h-80 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-4xl cursor-pointer' />
                </div>
            </div>
            <Footer />
            
        </div >
    )
}
export default Hero

