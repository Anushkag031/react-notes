import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("teal")

  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{ backgroundColor: color}}>
      <div className="fixed flex flex-none justify-center top-12 px-28 inset-x-0 ">
        <div className="flex flex-row px-3 justify-center rounded-md gap-3 bg-black">
         <button onClick={() => setColor("red")} className="outline-none px-5 py-3 shadow-xl rounded-xl text-red" style={{backgroundColor: "white"}}>Red</button>
         <button onClick={() => setColor("lavender")} className="outline-none px-5 shadow-xl rounded-xl text-black" style={{backgroundColor: "lavender"}}>Lavender</button>
         <button onClick={() => setColor("yellow")} className="outline-none px-5 shadow-xl rounded-xl text-black" style={{backgroundColor: "yellow"}}>Yellow</button>
         <button onClick={() => setColor("pink")} className="outline-none px-5 shadow-xl rounded-xl text-black" style={{backgroundColor: "pink"}}>Pink</button>
         <button onClick={() => setColor("orange")} className="outline-none px-5 shadow-xl rounded-xl text-black" style={{backgroundColor: "orange"}}>Orange</button>
         <button onClick={() => setColor("grey")} className="outline-none px-5 shadow-xl rounded-xl text-black" style={{backgroundColor: "grey"}}>Grey</button>
        </div>
      </div>
    </div>      
    </>
  )
}

export default App
