import React, {useState} from 'react'

const Counter = () => {

    let [cnt, setCnt] = useState(0);

    const increment = ()=>{
        setCnt(cnt+1);
    }
    const decrement = ()=>{
        setCnt(cnt-1);
    }

  return (
    <div className='mt-40'>
      <h1 className='text-3xl font-bold underline'>Counter Component</h1><br />
      <h1 className='text-2xl font-bold'>Count: {cnt}</h1><br />
      <button className='bg-blue-500 hover:bg-blue-700 p-2 rounded text-white' onClick={increment}>
        Increment
      </button>{' '}
      <button className='bg-red-500 hover:bg-red-700 p-2 rounded text-white' onClick={decrement}>
        Decrement
      </button>
    </div>
  )
}

export default Counter
