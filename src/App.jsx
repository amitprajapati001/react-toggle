import { useState } from 'react'

import './App.css'

function App() {

  const [toggle,setToggle]=useState("")


  // function handleClick(){
  //       setToggle(!toggle)
  // }

  return (
    <>
     
       
      <div className="card">
        {/* <button onClick={() => handleClick()}>
        Click Me
        </button>


        {toggle &&  <p>Hi I am Visible</p>} */}

        <input  onChange={(e)=>setToggle(e.target.value)} />

        <p className='togglepara'>{toggle}</p>
    
      </div>
  
    </>
  )
}

export default App
