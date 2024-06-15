import React from 'react'

function Circle({img}) {
  return (
    <div className="flex bg-white rounded-full bg-opacity-30 border border-white p-1 justify-center items-center" ><img src={img} className='h-5'></img></div>
  )
}

export default Circle

