import React from 'react'

const HowTo = () => {
  return (
    <>
    <div className=' bg-red-500 pb-1 bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400'>
        <div className='flex flex-col lg:flex-row items-center justify-center lg:h-72 text-gray-100 font-serif bg-gradient-to-r from-fuchsia-900 via-blue-900 to-fuchsia-900 py-2'>
            <div className='w-3/4 lg:h-72 px-2 lg:w-1/4 flex items-start justify-center'>
                <div className='flex-col'>
                    <div className='text-3xl font-medium text-center my-8'>Step 1</div>
                    <div className='flex items-center justify-center my-2'>
                    <ion-icon name="logo-amazon" class="text-7xl  text-yellow-600"></ion-icon>
                    </div>
                    <div className='italic'>Enter Amazon Product URL</div>
                </div>
            </div>
            <div className='w-3/4 lg:h-72 px-2 lg:w-1/4 flex items-start justify-center'>
                <div className='flex-col'>
                    <div className='text-3xl font-medium text-center my-8'>Step 2</div>
                    <div className='flex items-center justify-center my-2'>
                        <ion-icon name="enter-outline" class="text-7xl  text-fuchsia-600"></ion-icon>                
                    </div>
                    <div className='italic'>Enter Flipkart Product URL</div>
                </div>
            </div>
            <div className='w-3/4 lg:h-72 px-2 lg:w-1/4 flex items-start justify-center'>
                <div className='flex-col'>
                    <div className='text-3xl font-medium text-center my-8'>Step 3</div>
                    <div className='flex items-center justify-center my-2'>
                        <ion-icon name="play-outline" class="text-7xl  text-orange-600"></ion-icon>                
                    </div>
                    <div className='italic'>Click on Compare</div>
                </div>
            </div>
            <div className='w-3/4 lg:h-72 px-2 lg:w-1/4 flex items-start justify-center '>
                <div className='flex-col'>
                    <div className='text-3xl font-medium text-center my-8'>Step 4</div>
                    <div className='flex items-center justify-center my-2'>
                        <ion-icon name="eye-outline" class="text-7xl text-lime-600"></ion-icon>                
                    </div>
                    <div className='italic'>Compare both products</div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HowTo