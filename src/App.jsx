import useLocalStorage from "./useLocalStorage"


function App() {

  const {val,setValue}=useLocalStorage("hello","Amit")

  console.log(val,"line3758")

    // setValue{"sunita"}
 

  return (
    <>
    <div className="maindiv">
            

<h1>{val}</h1>

<button onClick={()=>  setValue("Aman")}  >Click me</button>
    
    </div>
    
    </>
  )
}
export default App
