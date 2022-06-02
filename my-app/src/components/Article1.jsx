import React from 'react';
import CommentBox from './CommentBox';

const article1 = () => {
  return (
    <div>
        <div name='article1' className='w-full md:h-screen  bg-black'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#99B898] border-[#E84A5F]'>Text</p>
                <p className='py-6 text-[#E84A5F]'>Text</p>
           </div>
             <CommentBox />
        </div>
        </div>
    </div>
  )
}

export default article1