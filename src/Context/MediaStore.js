import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";


export let mediaContext=createContext()

export default function MediaContextProvider(props){
  const [userData, setuserData] = useState('')

  let saveUserData=()=>{
    setuserData(localStorage.getItem("token"))
  }
  useEffect(() => {
    if(localStorage.getItem("token")){
      saveUserData()
    }
   
  }, [])

    


  let LogOut=()=>{
    localStorage.removeItem("token")
    setuserData('')
    return <Navigate to="/Login"/>


  }

    return <mediaContext.Provider value={{saveUserData,userData,LogOut}}>
     {props.children}
    </mediaContext.Provider>
}