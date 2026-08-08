import React from 'react'

const Skeleton = () => {
    return (
        <div className='border border-grey-200 rounded-lg p-4 max-w-sm w-full mx-auto bg-white shadow-md animate-pulse'>
            {/*for Thumbnail */}
            <div className="h-48 bg-gray-300 rounded-md mb-4"></div>

            {/*for title */}
            <div className="h-3 bg-gray-300 rounded w-1/4 mb-2"></div>

            {/*for category */}
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>

            {/*for description */}
            <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-5/6"></div>
        </div>
    )
}

export default Skeleton
