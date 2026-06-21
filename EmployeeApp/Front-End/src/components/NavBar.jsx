import React from 'react'

const NavBar = () => {
  return (
    <div>
      <h1>NavBar</h1>
      <nav className='bg-blue-500 text-white p-4 flex justify-between'>
        <h1 className='font-bold text-2xl'>Employee App</h1>
        <div className='flex gap-6'>
            <a href="/" className='hover:bg-yellow-500 p-2'>View</a>
            <a href="/a" className='hover:bg-yellow-500 p-2'>Add</a>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
