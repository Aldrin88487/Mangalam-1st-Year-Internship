import React, {useState} from 'react'

const StateBasics = () => {

    let [name,setname] = useState('Ms. Jane Smith');
    //hook to manage state=> useState()
    //let [variable name, function(ONLY THIS FUNC CAN EDIT THIS VAR)] = useState()=>make sure is imported from react;

    let [sname,setSname] = useState('Mr. John Doe');
const changename =  ()=>{
    setname(sname);
    setSname(name);
}
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello {sname}</h1>
      <br />
      <button className='bg-red-500 hover:bg-blue-700 p-2 rounded text-white' onClick={changename}>
        Click Me
      </button>
      <form action="">
        <input type="text" placeholder='Enter your name' className='border-2 border-gray-300 p-2 rounded' id="nameInput"  />
        <button className='bg-green-500 hover:bg-green-700 p-2 rounded text-white' onClick={(e)=>{setSname(nameInput.value); e.preventDefault();}}>
          Update Name
        </button>
      </form>

    </div>
  )
}

export default StateBasics
