import React, { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'
 import axios from "./utils/axios"
import Loading from './Loading'
 
 function Details(){
const {id} = useParams()
const [pro, setpro] = useState(null)

const getsingleproduct = async () => {
  try{
    const { data } = await axios.get(`/products/${id}`)
  setpro(data)
  } catch (error) {
      console.log(error)
    }
  }
   
useEffect(() => {
  getsingleproduct();
},[])

  return pro ? (
  <> 
    <div className='h-full w-screen bg-red-200 flex item-center '>
  <div className='card h-[80%] w-[80%] bg-white m-auto rounded-lg flex'>

<img className="object-contain h-[50%] w-[50%] "  
src={`${pro.image}`}
/>  

<div className='mt-20 ml-4'>
<h1 className='text-5xl'>{pro.title}</h1>
  <h2 className='text-zinc-400 mt-3'>{pro.category}</h2>
  <h2 className='text  mt-3'>{pro.price}</h2>
  <h2 className='text  mt-3'>{pro.description}</h2>
</div>
  </div>
    </div>
    </>
  ) : (<Loading />)
}

export default Details

// bnn