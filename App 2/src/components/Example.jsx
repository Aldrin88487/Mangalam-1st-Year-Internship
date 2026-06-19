import React,{useState} from 'react'

const Example = () => {
  let [name, setName] = useState("");

  return (
    <div className='mt-40 text-center'>
      <h1 className='text-3xl font-bold underline'>Welcome {name}</h1>
      <button className='bg-green-500 hover:bg-green-700 p-2 rounded-lg text-white mt-4' onClick={() => setName("Home")}>
        Home
      </button>
      <button className='bg-blue-500 hover:bg-blue-700 p-2 rounded-lg text-white mt-4 ml-2' onClick={() => setName("Gallery")}>
        Gallery
      </button>
      <button className='bg-gray-500 hover:bg-gray-700 p-2 rounded-lg text-white mt-4 ml-2' onClick={() => setName("Contact")}>
        Contact
      </button>   
    </div>
  )
}

export default Example
