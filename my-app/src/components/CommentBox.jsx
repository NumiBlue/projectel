import React from 'react'

export default function CommentBox () {
    return (

        <div className='flex jusify-center items-center h-full'>
            <form className='max-w-[400px] w-full mx-auto bg-[#2A363B] text-white p-8 rounded-3xl'>
            
                <div className='flex flex-col mb-4'>
                    <label>Add Comment:</label>
                    <input 
                    className='border relative bg-gray-100 text-black p-2' 
                    type='text' 
                    placeholder='Please enter your comment here'/>
                </div>
               
                <button className='w-full py-3 mt-6 relative text-white'>Submit</button>
              
            </form>
        </div>
        
    )
}