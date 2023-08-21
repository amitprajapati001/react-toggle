import React ,{useState,createContext,useContext  } from 'react'


const product =[
    {
        name:"dettol",
        price:"25 Rs"
    },
    {
        name:"Sugar",
        price:"45 Rs"
    },
    {
        name:"Rice",
        price:"52 rs"
    }
]

const card = () => {


  
  return (
    <div className='productdiv'>
           {
            product.map((item,index)=>{
                 return (<div className='productitem' key={index}>
                     <h1>{item.name}</h1> 
                     <h3>{item.price}</h3>
                      <button>Add to Cart</button>
                 </div>)
            })
           }
    </div>
  )
}

export default card
