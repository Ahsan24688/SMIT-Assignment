import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="flex flex-wrap items-center justify-center gap-x-20 text-center m-4 p-12  bg-amber-200 rounded-2xl">
                <div className="flex flex-col justify-center m-8 gap-4 w-70">
                    <h1 className='text-2xl font-bold'> SHOPMART </h1>
                    <p>ShopMart is your ultimate destination for top-tier products designed to elevate your everyday life. <br/> We are committed to delivering exceptional quality, stylish <br/> designs, and a seamless shopping experience you can always rely on.</p>
                    <input type="text" placeholder="Enter Your Feedback" className="border-2 rounded-lg p-2  justify-center bg-white" />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-center ">Submit</button>
                </div>

                <div className="flex flex-col justify-center m-8 gap-4">
                    <h1 className='text-2xl font-bold'> Company </h1>
                    <ul>
                        <li className='m-2'>About</li>
                        <li className='m-2'>Mobile</li>
                        <li className='m-2'>Blog</li>
                        <li className='m-2'>How we Work?</li>
                    </ul>
                </div>

                <div className="flex flex-col justify-center m-8 gap-4">
                    <h1 className='text-2xl font-bold'> Contact </h1>
                     <ul>
                        <li className='m-2'>Help/FAQ</li>
                        <li className='m-2'>Press</li>
                        <li className='m-2'>Affiliates</li>
                        <li className='m-2'>Partners</li>
                    </ul>
                </div>

                <div className="flex flex-col justify-center m-8 gap-4">
                    <h1 className='text-2xl font-bold'> Social Media </h1>
                     <ul>
                        <li className='m-2'>Facebook</li>
                        <li className='m-2'>Instagram</li>
                        <li className='m-2'>Twitter</li>
                        <li className='m-2'>Youtube</li>
                    </ul>
                </div>
            <p><strong>All Rights Reserved</strong> Copyright &copy; 2026 SHOPMART</p>
            </div>
      
    </div>
  )
}

export default Footer
