import React, {useState} from 'react'

const InputData = () => {

    let [val,setVal]=useState()
    let [out,setout]=useState()

    const inputhandler = (e) => {
        setVal(e.target.value)
    }

    const submithandler = () => {
        setout(val)
    }

  return (
    <div className='mt-40 text-center'>
      <h1 className='text-3xl font-bold underline'>Hello {val}</h1>
      <br />
      <h1 className='text-3xl font-bold underline'>Hello {out}</h1>
      <br/>
      <input
        type="text"
        placeholder="Enter Name"
        className='border border-gray-300 rounded-lg py-2 px-4 w-80 focus:ring-2 focus:ring-blue-500'
        onChange={inputhandler}
      />
        <br />
        <br />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={submithandler}>Submit</button>
    </div>
  )
}

export default InputData
