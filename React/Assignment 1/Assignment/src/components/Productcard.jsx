import React from 'react'
import { useNavigate } from 'react-router'

const Productcard = (props) => {
    const navigate = useNavigate()

    return (
        <div
            className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300"
            onClick={() => navigate(`/item/${props.id}`)}
        >
            <img className="h-48 w-full object-cover object-center" src={props.image} alt="blog" />
            <div className="p-4 flex flex-col grow">
                <h2 className="text-xs font-bold uppercase text-black mb-2">{props.category}</h2>
                <h1 className="text-lg text-black mb-2 line-clamp-2">{props.title}</h1>
                <p className="text-sm text-gray-600 line-clamp-2 mb-4">{props.description}</p>

                <div className="flex items-center flex-wrap mt-auto">
                    <a className="text-indigo-600 font-semibold text-sm inline-flex items-center">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Productcard
