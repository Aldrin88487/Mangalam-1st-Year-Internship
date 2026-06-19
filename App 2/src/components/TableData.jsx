import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TableData = () => {
var [users,setUsers]=useState([])
//useEffect(()=>{},[])
// useEffect(()=>{axios.get("url").then((res)=>{}).catch((err)=>{})},[])
useEffect(()=>{axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        console.log(res.data)
        setUsers(res.data)
    
    })
    .catch((err)=>{console.log(err)})},[])

  return (
    <div >
      <table className='w-full mt-6'>
        <thead>
            <tr className='bg-gray-800 text-white border'>
                <th className='p-2'>Name</th>
                <th className='p-2'>Phone</th>
                <th className='p-2'>Email</th>
            </tr>
        </thead>
        <tbody>
            {/* map((users) => {return(<tr className='border'/>)})      */}
            {users.map((val)=>{return(
                <tr className='border p-3'>
                    <td className='border p-3'>{val.name}</td>
                    <td className='border p-3'>{val.phone}</td>
                    <td className='border p-3'>{val.email}</td>
                </tr>
            )})}
        </tbody>
      </table>
    </div>
  )
}

export default TableData
