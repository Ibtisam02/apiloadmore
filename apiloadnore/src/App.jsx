import { useState } from 'react'
import Api from './Components/Api'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-screen h-screen justify-center items-center flex flex-wrap gap-2'>
<Api/>
    </div>
    </>
  )
}

export default App
