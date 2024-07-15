import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { mediaContext } from '../../../Context/MediaStore'


export default function ProtectRouter({children}) {
  let {userData}=useContext(mediaContext)
    if(userData == '' || localStorage.getItem("token") == null){
        return <Navigate to="/Login"/>
    }else{
        return children
    }
  return (
    <>
      
    </>
  )
}
