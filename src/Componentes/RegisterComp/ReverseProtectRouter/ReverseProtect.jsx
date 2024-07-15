import React, { useContext } from 'react'

import { Navigate } from 'react-router-dom'
import { mediaContext } from '../../../Context/MediaStore'

export default function ReverseProtect({children}) {
    let {userData}=useContext(mediaContext)
    if(userData!=''||localStorage.getItem("token")!=null){
        return <Navigate to={'/'}/>

    }else{
        return children
    }
  return (
    <>
      
    </>
  )
}
