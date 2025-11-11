import React from 'react'
import Routing from './utils/Routing'
import Navbar from './components/Navbar'
import Footer from './sections/Footer'
const App = () => {
  return (
    <div className='w-full' >
      <Navbar></Navbar>
    <Routing/>
<Footer></Footer>
    </div>
  )
}

export default App