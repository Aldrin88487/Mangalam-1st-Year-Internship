import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const AddEmp = () => {

  let location= useLocation();
  let navigate = useNavigate()
  var [input,setInput] = useState({
    ename:"",
    eage:"",
    esalary:""
  })
  
  useEffect(()=>{
    if (location.state !== null) {
        setInput({...input,
          ename:location.state.ename,
          eage:location.state.eage,
          esalary:location.state.esalary
        })
  }
},[])


  const inputhandler = (e) => {
    setInput({...input,[e.target.name]:e.target.value})
    console.log(input)  
  }


  const submithandler = () => {
    if (location.state !== null ) {
        axios.put(`http://localhost:3005/${location.state._id}`,input)
             .then((res)=> {
              alert(res.data)
              navigate('/')
             })
             .catch((err)=>{console.log(err)})
    }
    else {
          axios
        .post('http://localhost:3005/', input)
        .then((res) => {
          console.log(res);
            alert(res.data)
        })
        
        .catch((err) => 
          console.log(err));
    }
      
}

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-xl shadow-lg w-106 hover:shadow-2xl transition duration-300'>
        <h1 className='text-3xl font-bold mb-8'>Add Employee</h1>
          
          <input 
                name='ename'
                onChange={inputhandler}
                value={input.ename}
                type="text" 
                placeholder='Enter Name' 
                className='w-full border border-gray-500 p-3 rounded-lg mb-4'/>
          <br/>
          <input 
                name='eage'
                onChange={inputhandler}
                value={input.eage}
                type="text" 
                placeholder='Enter Age' 
                className='w-full border border-gray-500 p-3 rounded-lg mb-4'/>
          <br/>
          <input 
                name='esalary'
                onChange={inputhandler}
                value={input.esalary}
                type="text"  
                placeholder='Enter Salary' 
                className='w-full border border-gray-500 p-3 rounded-lg mb-4'/>
          <br/>
          <button 
                className='bg-blue-300 py-2 mt-4 rounded-lg hover:bg-blue-500 w-full'
                onClick={submithandler} >Submit</button>
        
      </div>
    </div>
  )
}

export default AddEmp
