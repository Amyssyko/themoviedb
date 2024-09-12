import React from 'react'

function LoadingSkeleton() {
    return (
        <div className=" w-full h-screen">
            <div className="flex flex-col items-center justify-center">
                <h1 className='text-blue-500'>Loading</h1>
            </div>
        </div>
    )
}

export default LoadingSkeleton
