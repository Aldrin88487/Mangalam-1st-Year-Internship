import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

const ViewEmp = () => {

  var [emp,setemp] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:3005/')
      .then((res) => {
        console.log(res)
        setemp(res.data)})
      .catch((err) => {console.log(err)});
    }, [])

    const delemp = (id) => {
      console.log(id)
      axios        
      .delete(`http://localhost:3005/${id}`)
      .then((res) => {
          console.log(res)
          alert(res.data)
          setemp(emp.filter((val) => val._id !== id))
        })
        .catch((err) => {console.log(err)});
    };

let navigate = useNavigate()

    const editemp = (val) => {
        navigate('/a',{state:val})

    };

  return (
    <div>
      <h1 className='text-3xl font-bold mt-3 mb-8'>View Employee</h1>
      <table className='w-full border-collapse border shadow-lg '>
        <thead>
          <tr >
            <th className='hover:shadow-2xl transition duration-300 p-3'>Name</th>
            <th className='hover:shadow-2xl transition duration-300 p-3'>Age</th>
            <th className='hover:shadow-2xl transition duration-300 p-3'>Salary</th>
            <th className='hover:shadow-2xl transition duration-300 p-3'>Action</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((val) => {
            return <tr className='border-b hover:shadow-2xl transition duration-300' >
              <td className='p-3'>{val.ename}</td>
              <td className='p-3'>{val.eage}</td>
              <td className='p-3'>{val.esalary}</td>
              <td className='p-3'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
                        onClick={()=>{editemp(val)}}>Edit</button>{' '}
                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2' 
                        onClick={()=>{delemp(val._id);}}>Delete</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )

}
export default ViewEmp
