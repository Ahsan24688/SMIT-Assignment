import React from 'react'
import img from './1.png'
import img2 from './2.png'
import img3 from './3.png'
import img4 from './4.png'

const Hero = () => {
    return (
        <div>
            <div>
                <img src={img} alt="Landing Page Image"
                    className="w-7xl h-120 mx-auto rounded-2xl border-2" />
            </div>
            <div className="flex items-center text-center m-8">
                <div className="flex flex-col justify-center">
                    <h1 className=" text-4xl font-bold text-black m-8">
                        Lets Explore Products</h1>
                    <p className="text-lg text-black-700 m-8">Explore our latest range of premium products <br/>crafted just for you. Find your favorites today and experience <br/> unmatched quality, sleek design, and everyday reliability that fits your lifestyle perfectly</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 m-8">
                    <img src={img2} alt="Image" className='w-64 h-80 rounded-2xl border-2' />
                    <img src={img3} alt="Image" className='w-64 h-80 rounded-2xl border-2' />
                    <img src={img4} alt="Image" className='w-64 h-80 rounded-2xl border-2' />
                </div>
            </div>
        </div>
    )
}
export default Hero

