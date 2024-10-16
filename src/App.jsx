import { useState } from 'react'
import './App.css'

function App() {

  const [value, Setvalue] = useState("")
  return (
      <div className='min-h-screen bg-gray-800 flex items-center justify-center'>
        <div className=' bg-slate-600 rounded-lg border-2 border-gray-900 shadow-2xl'>
          <form action="" className='border-b-2 border-black'>
            <input type="text" className='p-4 bg-transparent text-2xl text-right' value={value}/>
          </form >

          <div className='p-6 text-white grid grid-cols-4 gap-5 text-2xl'>

            <input type="button" value="1" className=' bg-blue-500 rounded-full hover:bg-blue-800' onClick={e => Setvalue(value+ e.target.value)}/>
            <input type="button" value="2" className=' bg-blue-500 rounded-full hover:bg-blue-800' onClick={e => Setvalue(value+ e.target.value)}/>
            <input type="button" value="3" className=' bg-blue-500 rounded-full hover:bg-blue-800' onClick={e => Setvalue(value+ e.target.value)}/>
            <input type="button" value="+" className=' bg-blue-500 rounded-full hover:bg-blue-800' onClick={e => Setvalue(value+ e.target.value)}/>
            <input type="button" value="4" className=' bg-blue-500 rounded-full hover:bg-blue-800' onClick={e => Setvalue(value+ e.target.value)}/>
            <input type="button" value="5" className=' bg-blue-500 rounded-full hover:bg-blue-800' onClick={e => Setvalue(value+ e.target.value)}/>
            <input type="button" value="6" className=' bg-blue-500 rounded-full hover:bg-blue-800' onClick={e => Setvalue(value+ e.target.value)}/>
            <input type="button" value="-" className=' bg-blue-500 rounded-full hover:bg-blue-800' onClick={e => Setvalue(value+ e.target.value)}/>
            <input type="button" value="7" className=' bg-blue-500 rounded-full hover:bg-blue-800' onClick={e => Setvalue(value+ e.target.value)}/>
            <input type="button" value="8" className=' bg-blue-500 rounded-full hover:bg-blue-800' onClick={e => Setvalue(value+ e.target.value)}/>
            <input type="button" value="9" className=' bg-blue-500 rounded-full hover:bg-blue-800' onClick={e => Setvalue(value+ e.target.value)}/>
            <input type="button" value="*" className=' bg-blue-500 rounded-full hover:bg-blue-800' onClick={e => Setvalue(value+ e.target.value)}/>
            <input type="button" value="00" className=' bg-blue-500 rounded-full hover:bg-blue-800' onClick={e => Setvalue(value+ e.target.value)}/>
            <input type="button" value="0" className=' bg-blue-500 rounded-full hover:bg-blue-800' onClick={e => Setvalue(value+ e.target.value)}/>
            <input type="button" value="." className=' bg-blue-500 rounded-full hover:bg-blue-800' onClick={e => Setvalue(value+ e.target.value)}/>
            <input type="button" value="/" className=' bg-blue-500 rounded-full hover:bg-blue-800' onClick={e => Setvalue(value+ e.target.value)}/>
            <input type="button" value="AC" className=' bg-blue-500 rounded-full hover:bg-blue-800' onClick={e => Setvalue("")}/>
            <input type="button" value="DE" className=' bg-blue-500 rounded-full hover:bg-blue-800' onClick={e => Setvalue(value.slice(0,-1))}/>
            <input type="button" value="=" className=' bg-blue-500 col-span-2 rounded-full hover:bg-blue-800' onClick={e => Setvalue(eval(value))}/>
          </div>
        </div>
      </div>
  
  )
}

export default App
