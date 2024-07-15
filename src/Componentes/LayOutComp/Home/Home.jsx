import React, { useContext } from 'react'
import { mediaContext } from '../../../Context/MediaStore'

export default function Home() {

  let {userData,LogOut}= useContext(mediaContext)
  return (
    <>
      <h2 className='m-2 text-white'>اهلا بك {userData}</h2>
      
    </>
  )
}
