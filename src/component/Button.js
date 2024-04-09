import React from 'react'

function Button({children,onClick}) {
  return (
    <button className='bg-black text-white py-4 px-16 rounded-lg text-xl' onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
