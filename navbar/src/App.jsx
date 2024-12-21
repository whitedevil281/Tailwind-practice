import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      <ul className='flex gap-6 p-4 pl-5 bg-gray-600 items-center'>
      <img src="/rb_1365.png" alt="" className='w-12'/>
        <li className='list'>Home</li>
        <li className='list'>Services</li>
        <li className='list'>About us</li>
        <li className='list'>Contact us</li>
      </ul>
    </nav>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
</style>
    </>
  )
}

export default App
