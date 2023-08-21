import React from "react"
import { useState,useEffect } from "react"

const useLocalStorage=(key,value)=>{

   const [val,setValue]=useState( localStorage.getItem(key) ? localStorage.getItem(key) : value)

useEffect(()=>{
    localStorage.setItem(key, val);
   
},[val])
   

    return {val,setValue}
}

export default useLocalStorage;