import { useState } from 'react'

import './App.css'

function App() {

  const [toggle,setToggle]=useState(false)


  function handleClick(){
        setToggle(!toggle)
  }

  return (
    <>
     
       
      <div className="card">
        <button onClick={() => handleClick()}>
        Click Me
        </button>


        {toggle &&  <p>Hi I am Visible</p>}
    
      </div>
  
    </>
  )
}

export default App
