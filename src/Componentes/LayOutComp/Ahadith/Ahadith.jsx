import React, { useEffect, useState } from 'react'
import style from "./Ahadith.module.scss"
import axios from 'axios'

export default function Ahadith() {

  const [ahadith, setAhadith] = useState([])
  const [loading, setloading] = useState(false)

  let getAllAhadith=async()=>{
    setloading(true)
    try{
      let {data}=await axios.get(`https://ayah-ten.vercel.app/ahadith/getAllAhadith`)
      setAhadith(data.allAhadith)
      console.log(data.allAhadith);
      setloading(false)
    }catch(error){
      console.log("حدث خطا",error);
      setloading(false)
    }
  }
  useEffect(() => {
    getAllAhadith()
  }, [])
  




  return (
    <>
    {loading?(
       <div className='d-flex justify-content-center align-items-center vh-100'>
       <i className="fa-solid fa-mosque  fa-10x   text-white fa-spin"></i>
   </div>
    ):(
      <div className="Ahadith">
      <div className="container">
        <div className="row">
        <div className="col-md-8 m-auto">
           <div className={`${style.head_Of_Ahadith}`}>
             <h2>أحاديثُ  🧡</h2>

           </div>
         </div>
         {ahadith.map((item,index)=>(
          <div key={index} className="col-md-12 m-auto">
          <div className={`${style.head_of_caption} p-4`}>
          <div className={`${style.AhadithCaption} `}>
             <h2>{`<<${item.hadith}🧡>>`}</h2>
 
           </div>
          </div>
          </div>
         ))}
        </div>
      </div>
    </div>

    )}
   
      
    </>
  )
}
