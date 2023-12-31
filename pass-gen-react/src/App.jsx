import { useState , useCallback, useEffect, useRef} from 'react'

import './App.css'

function App() {
  //initially length is 8
  const [length, setLength] = useState(8)
  //initially numbers are not allowed
  const[numberAllowed, setNumberAllowed] = useState(false);
  //initially strings are not allowed
  const[charAllowed, setCharAllowed] = useState(false);
  const[password, setPassword]=useState("");

  //use ref hook
  const passRef= useRef(null);

  const passgen = useCallback(() => {
    let pass=""
    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) string += "0123456789"

    if(charAllowed) string += "!@#$%^&*(){}+_:><?|~"

    for(let i = 1; i <=length; i++)
    {
      let char= Math.floor(Math.random()* string.length+1);
      pass+=string.charAt(char);
    }

    setPassword(pass)

//jis jispe dependency h
  }, [length, numberAllowed, charAllowed,setPassword]);

  const copyPassword = useCallback(( )=> {
    //text get selected thats why we used callRef 
    //basically it is used for optimization purposes
    passRef.current?.select();
    //copy to clipboard method
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passgen() //khi chech chadh ho uske liye, if true then run again 
  }, [length, numberAllowed, charAllowed, passgen])

  return (
    <>
      <div className="w-full justify-center max-w-md mx-auto shadow-md rounded-md px-4 py-2 my-8 text-purple-300 bg-black">
      <h1 className='text-center'>Password Generator</h1>
      <div className="flex shadow-md text-black rounded-lg mb-4 px-2 py-4">
        <input type="text"
        placeholder='password'
        className='px-3 w-full rounded-md' 
        value={password}
        ref={passRef}
        readOnly/>
        <button 
        onClick={copyPassword}
        className='bg-blue-400 shrink-0 px-3 text-black rounded-md' > copy</button>
      </div>
      <div className="flex gap-x-2 text-sm">
        <div className="flex items-center px-1 gap-x-1">
          <input 
          type="range"
          min={6}
          max={25} 
          value={length}
          className='cursor-pointer text-black'
          onChange={(e) => {setLength(e.target.value)}}
         
          />
          <label >Length:{length}</label>

        </div>
        <div className="flex items-center px-3">
          <input type="checkbox" 
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="">Numbers</label>
        </div>
        <div className="flex items-center px-3">
          <input type="checkbox" 
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="">Characters</label>
        </div>

      </div>
      </div>
    </>
  )
}

export default App
